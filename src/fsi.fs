[<ReflectedDefinition>]
module Ionide.Fsi

open System
open System.Text.RegularExpressions


open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.path
open Atom
open Atom.FSharp

[<ReflectedDefinition>]
[<AutoOpen>]
module Bindings =
    [<JSEmitInline("new FsiView()")>]
    let NewFsiView () : FunScript.TypeScript.atom.ScrollView = failwith "JS"

    type IWorkspace with
        [<FunScript.JSEmitInline("({0}.addOpener({1}))")>]
        member __.addOpener(cb: string -> obj) : unit = failwith "JS"
        [<FunScript.JSEmitInline("({0}.paneForItem({1}))")>]
        member __.paneForItem(o : obj) : obj = failwith "JS"

[<ReflectedDefinition>]
module FsiView =
    let clear () =
        let fsi = jq ".fsi"
        fsi.empty () |> ignore

    let insert (str : string) =
        let fsi = jq ".fsi"
        str.Split('\n') |> Array.iter (fun s ->
            if String.IsNullOrEmpty s |> not then
                let r = sprintf "<pre class='fsi-row'>%s</pre>" s
                fsi.append r |> ignore
                fsi.scrollTop(99999999.) |> ignore
        )


[<ReflectedDefinition>]
module FsiService =
    let subscriptions = ResizeArray()
    let mutable private fsipath = ""
    let mutable private fsiEditor : IPanel option = None
    let mutable private fsiProc   : ChildProcess option = None

    let private handle (data : obj) =
        if data <> null then
            let response = data.ToString().Replace("\\","\\\\")
            fsiEditor |> Option.iter (fun _ -> FsiView.insert response)


    /// Starts the Fsi Process with a listener on its standard out stream
    let private startFsi () =
        let fs = Process.spawnSame fsipath ""
        fsiProc <- fs |> Some
        fs.stderr.on ("data", unbox<Function> (handle)) |> ignore
        fs.stdout.on ("data", unbox<Function> (handle)) |> ignore

    /// Kills the Fsi Process and reloads the REPL pane
    let private resetFsi () =
        if fsiProc.IsSome then fsiProc.Value.kill()
        if fsiEditor.IsSome then
            startFsi ()
            FsiView.clear ()


    /// Opens the REPL pane and starts an Fsi Process if needed
    let private openFsi () =
        let edit = Globals.atom.workspace.getActiveTextEditor()
        //let g = Globals.atom.grammars.grammarForScopeName("source.fsharp")
        Globals.atom.workspace._open("F# Interactive", {split = "right"})._done((fun ed ->
            fsiEditor <- Some ed
            //ed.setGrammar g
            if fsipath <> "" then
                resetFsi ()
            ) |> unbox<Function>)

    /// Send a block of text to FSI
    // TODO - trying to get it to open the repl if it's not already open
    let private sendToFsi (msg' : string) =
        if fsiProc.IsNone then openFsi()
        fsiEditor |> Option.iter (fun ed ->
            if Globals.atom.views.getView ed |> JS.isDefined |> not then openFsi () )

        let editor = Globals.atom.workspace.getActiveTextEditor()
        if isFSharpEditor editor then
            let dir = Globals.dirname(editor.getPath())
            let msg = msg'.Replace("\uFEFF", "") + ";;\n"

            fsiEditor |> Option.iter( fun ed -> FsiView.insert msg)
            fsiProc |> Option.iter( fun cproc ->
                let cd = "#cd \"\"\"" + dir + "\"\"\";;\n"
                cproc.stdin.write(cd, "utf-8")
                cproc.stdin.write(msg, "utf-8")
                )


    /// Send the current line at the cursor's position to FSI
    let private sendLine () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.lineTextForBufferRow(editor.getCursorBufferPosition().row).Trim()
        |> sendToFsi
        editor.moveDown(1.)
        editor.moveToBeginningOfLine()
        ()

    /// Send the currently selected text to FSI
    let private sendSelection () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.getSelectedText () |> sendToFsi
        editor.moveDown(1.)
        editor.moveToBeginningOfLine()
        ()


    /// Send all of the text of the active editor window to FSI
    let private sendFile () =
        let editor = Globals.atom.workspace.getActiveTextEditor()
        editor.getText() |> sendToFsi
        ()

    let opener (uri : string) =
        try
            if uri.EndsWith "F# Interactive" then
                NewFsiView () |> unbox<obj>
            else
                null |> unbox<obj>
        with
        | _ -> null |> unbox<obj>


    let activate () =
        Globals.atom.workspace.addOpener opener
        Globals.atom.commands.add("atom-workspace", "FSI:Open", openFsi |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Line", sendLine |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Selection", sendSelection |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-File", sendFile |> unbox<Function>)  |> ignore
        Globals.atom.commands.add("atom-text-editor", "FSI:Reset-REPL", resetFsi |> unbox<Function>)  |> ignore
        fsipath <-  Globals.atom.config.get("ionide-fsi.FsiPath") |> unbox<string>
        let s = Globals.atom.config.onDidChange ("ionide-fsi.FsiPath",
                    (fun n -> fsipath <- n.newValue  ) |> unbox<Function>)
        subscriptions.Add s

        if Process.isWin () |> not && fsipath = "C:/Program Files (x86)/Microsoft SDKs/F#/4.0/Framework/v4.0/Fsi.exe" then
            Globals.atom.config.set("ionide-fsi.FsiPath", "fsharpi")
            fsipath <- "fsharpi"




        ()

    let deactivate () =
        subscriptions |> Seq.iter(fun n -> n.dispose())
        subscriptions.Clear()
        ()





type Fsi() =
    member x.activate(state:obj) =
        FsiService.activate ()
        ()

    member x.deactivate() =
        FsiService.deactivate ()
        ()
