﻿module Ionide.Paket.Generator

// --------------------------------------------------------------------------------------
// Load the F# implementation and specify parameters for the translator
// --------------------------------------------------------------------------------------


// Root directory, relatively to which files are saved
let root = __SOURCE_DIRECTORY__

// Translate the type given as #1 using module name #2
// and save the result to a file specified in #3
let atomModules =
  [ typeof<Ionide.Fsi.Fsi>, "IonideFSI" ]

// --------------------------------------------------------------------------------------
// Compile F# type to an atom module
// --------------------------------------------------------------------------------------

// TODO: This only "requires" CompositeDisposable!
// (So if you're using other things from atom, they need to be added)

open System.Reflection
open Microsoft.FSharp.Quotations
open FunScript.Compiler

let translateModules fileName =
  for typ, moduleName in atomModules do

    // We generate F# quotation that returns all the methods that we want to expose
    // from the class. This way, we can then wrap it into simple JS code that
    // creates the module. The generated quotation looks something like this:
    //
    //   [| box (fun () -> new WordCount());
    //      box (fun (self:WordCount) a1 .. an -> self.activate(a1, .., an))
    //      ... and so on for all other methods .. |]
    //
    let ctor = typ.GetConstructor([||])
    let meths = typ.GetMethods(BindingFlags.DeclaredOnly ||| BindingFlags.Public ||| BindingFlags.Instance)

    /// Creates "(fun p1 .. pn -> <body>)" and "[p1; ..; pn]"
    /// (which is used when generating boxed lambdas that pass parameters to the actual function)
    let createParameterPassing (m:MethodBase) =
      let paramVars = m.GetParameters() |> Array.mapi (fun i p -> Var(sprintf "p%d" i, p.ParameterType))
      let paramArgs = [ for v in paramVars -> Expr.Var(v) ]
      let lambdaConstr = paramVars |> Seq.fold (fun fn var -> fun body -> Expr.Lambda(var, fn body)) id
      lambdaConstr, paramArgs

    let exportFunctions =
      [ for m in meths ->
          let tv = new Var("this", typ)
          let lambdaConstr, paramArgs = createParameterPassing m
          Expr.Lambda(tv, lambdaConstr (Expr.Call(Expr.Var(tv), m, paramArgs))) ]

    let exportCtor =
      Expr.Coerce
        ( Expr.Lambda(Var("ign", typeof<unit>), Expr.NewObject(typ.GetConstructor [||], [])),
          typeof<obj> )

    let functionArray =
      Expr.NewArray(typeof<obj>, exportCtor::[ for f in exportFunctions -> Expr.Coerce(f, typeof<obj>)])

    let coreJS = Compiler.Compile(functionArray)

    // Now we just wrap the generated JavaScript into 'wrappedFunScript' function
    // Then we call the function and create a module export with all the public methods
    // from the provided type (just by calling one of the functions from the array)
    let moduleJS =
      [ yield "var CompositeDisposable = require('atom').CompositeDisposable;"
        yield "var child_process = require('child_process');"
        yield "window.$ = require('jquery');"
        yield "var atomSpaceView = require('atom-space-pen-views');"
        yield "var path = require('path');"
        yield "var FsiView = require('./fsi-view')"
        yield ""
        yield "function wrappedFunScript() { \n" + coreJS + "\n }"
        yield "var _funcs = wrappedFunScript();"
        yield "var _self = _funcs[0]();"
        yield ""
        yield "module.exports = " + moduleName + " = {"
        for i, m in Seq.zip [1 .. meths.Length] meths do
          let parNames = String.concat "" [ for j in 1 .. m.GetParameters().Length -> sprintf "p%i" j ]
          let parArgs = String.concat "" [ for j in 1 .. m.GetParameters().Length -> sprintf "(p%i)" j ]
          yield m.Name + ": function(" + parNames + ") {"
          yield "  return _funcs[" + string i + "](_self)" + parArgs + "; }" + ","

        yield "config : {
            FsiPath: {type: 'string', 'default': 'C:/Program Files (x86)/Microsoft SDKs/F#/4.0/Framework/v4.0/Fsi.exe'}
            }"

        yield "};" ]
      |> String.concat "\n"
    System.IO.File.WriteAllText(System.IO.Path.Combine(root, fileName), moduleJS)

// --------------------------------------------------------------------------------------
// Entry point - do stuff!
// --------------------------------------------------------------------------------------

do translateModules "../release/lib/fsi.js"
