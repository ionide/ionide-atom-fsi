namespace Atom.FSharp

open System
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom
open Atom.FSharp

// --------------------------------------------------------------------------------------
// REST request and responses
// --------------------------------------------------------------------------------------

type TypeCheckError =
  { startLine : int
    endLine : int
    startColumn : int
    endColumn : int
    fileName : string
    severity : string
    errorNumber : int
    message : string }

type Result<'T> =
  { result : string
    output : string
    details : 'T }

type EvalDetails =
  { string : string
    html : string
    warnings : TypeCheckError[] }

type EvalRequest =
  { file : string
    line : int
    code : string }

/// Wrapper that discriminates based on Result.result
type EvaluationResult =
  | Error of Result<TypeCheckError[]>
  | Exception of Result<string>
  | Success of Result<EvalDetails>


// --------------------------------------------------------------------------------------
// Communication with F# Interactive Server running in the background
// --------------------------------------------------------------------------------------

[<ReflectedDefinition>]
module InteractiveServer =

    let private genPort () =
        let r = Globals.Math.random ()
        let r' = r * (8999. - 8100.) + 8100.
        r'.ToString().Substring(0,4)

    let private port = genPort ()

    let private url s = sprintf @"http://localhost:%s/%s" port s

    let mutable private service : ChildProcess option =  None

    let private request<'R> (url : string) (data: obj option) : Async<'R>  = async {
        try
            Logger.logf "FSI" "Sending request: %O" [| data |]
            let r = System.Net.WebRequest.Create url
            let req: FunScript.Core.Web.WebRequest = unbox r
            req.Headers.Add("Accept", "application/json")
            req.Headers.Add("Content-Type", "application/json")
            req.Method <- "POST"

            data |> Option.iter (fun data ->
                let str = Globals.JSON.stringify data
                let data = System.Text.Encoding.UTF8.GetBytes str
                let stream = req.GetRequestStream()
                stream.Write (data, 0, data.Length ) )

            let! res = req.AsyncGetResponse ()
            let stream =  res.GetResponseStream()
            let json = System.Text.Encoding.UTF8.GetString stream.Contents
            return unbox<'R> (Globals.JSON.parse json)
        with e ->
            let msg = if e <> null then e.ToString() else "<null>"
            Logger.logf "ERROR" "Parsing response failed: %O" [| e |]
            return (unbox null) }

    let isRunning () = service.IsSome

    let eval file line code = async {
        let! result = request<Result<unit>> (url "eval") (Some (box { file = file; line = line; code = code }))
        match result.result with
        | "exception" -> return Exception (unbox result)
        | "error" -> return Error (unbox result)
        | "success" -> return Success (unbox result)
        | _ ->
            Logger.logf "ERROR" "Eval returned unexpected result: %O" [| result |]
            return failwith "Eval returned unexpected result" }

    let cancel () = async {
        let! res = request<Result<unit>> (url "cancel") None
        if res = unbox null || res.result <> "cancel" then Logger.logf "ERROR" "Received unexpected response for 'cancel': %O" [| res |] }

    let output () = async {
        let! res = request<Result<unit>> (url "output") None
        if res = unbox null || res.result <> "output" then Logger.logf "ERROR" "Received unexpected response for 'output': %O" [| res |]
        return res.output }

    let start () =
        try
            let pth =
                if Process.isWin () then @"\ionide-fsi\bin\FsInteractiveService.exe"
                else @"/ionide-fsi/bin/FsInteractiveService.exe"
            let location = Globals.atom.packages.packageDirPaths.[0] + pth
            let child = Process.spawn location (Process.fromPath "mono") port
            service <- Some child
            child.stderr.on("data", unbox<Function>( fun n -> Globals.console.error (n.ToString()))) |> ignore
        with exc ->
            Globals.console.error exc
            service <- None
            let opt = createEmpty<INotificationsOptions> ()
            opt.detail <- "Interactive services could not be spawned"
            opt.dismissable <- true
            Globals.atom.notifications.addError("Critical error", opt) |> ignore

    let stop () =
        service |> Option.iter (fun n -> n.kill "SIGKILL")
        service <- None

    let reset () = async {
        stop ()
        start () }
