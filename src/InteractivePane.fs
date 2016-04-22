[<ReflectedDefinition>]
module Ionide.Fsi

open System
open Atom
open Atom.FSharp 
open Atom.FSharp.Control

open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open FunScript.TypeScript.path

// --------------------------------------------------------------------------------------
// Additional FunScript bindings
// --------------------------------------------------------------------------------------

[<AutoOpen>]
module Bindings =
    [<JSEmitInline("new FsiView()")>]
    let newFsiView () : FunScript.TypeScript.atom.ScrollView = failwith "JS"

    [<JSEmitInline("{0}.getTitle()")>]
    let getTitle (item:obj) :string = failwith "JS"

    type IWorkspace with
        [<FunScript.JSEmitInline("({0}.addOpener({1}))")>]
        member __.addOpener(cb: string -> obj) : unit = failwith "JS"
        [<FunScript.JSEmitInline("({0}.paneForItem({1}))")>]
        member __.paneForItem(o : obj) : obj = failwith "JS"

// --------------------------------------------------------------------------------------
// Manipulating the F# Interactive panel in various ways
// --------------------------------------------------------------------------------------

type SendSnippetKind = 
    | Line 
    | File
    | Selection

/// Removes everything currently displayed
let private clearFsiPane () =
    jq(".fsi").empty() |> ignore

/// Append input entered by the user
let private appendFsiInput (input:string) =
    jq("<div />").addClass("fsi-in-block")
      .append(jq("<pre />").text(input)).appendTo(jq(".fsi")) |> ignore

/// Append output produced by FSI (typically in background)
let private appendFsiOutput (res:string) = 
    let fsi = jq ".fsi"
    jq("<div />").addClass("fsi-succ-block").appendTo(fsi)
      .append(jq("<pre class='output'/>").text(res)) |> ignore

/// Apend the result of running some command (Alt+Enter)
let private appendFsiResult res = 
    let fsi = jq ".fsi"
    match res with
    | Error(errs) ->
        let block = jq("<div />").addClass("fsi-error-block").appendTo(fsi)
        for err in errs.details do
            jq("<div />").addClass("fsi-" + err.severity)
              .append(jq("<span class='file'/>").text(err.fileName))
              .append(jq("<span class='loc'/>").text(string err.startLine + ":" + string err.startColumn))
              .append(jq("<span class='err'/>").text(err.severity + " " + (string err.errorNumber).PadLeft(4, '0')))
              .append(jq("<span class='msg'/>").text(err.message))
              .appendTo(block) |> ignore

    | Exception(exn) ->        
        jq("<div />").addClass("fsi-exn-block")
          .append(jq("<pre />").text(exn.details)).appendTo(fsi) |> ignore

    | Success(succ) ->
        let block = jq("<div />").addClass("fsi-succ-block").appendTo(fsi)
        block.append(jq("<pre class='output'/>").text(succ.output)) |> ignore
        if succ.details.html <> null then
            block.append("<div class='html'>" + succ.details.html + "</div>") |> ignore

    fsi.scrollTop(99999999.) |> ignore


/// Find the "F# Interactive" panel
let private tryFindFsiPane () = 
    let panes = unbox<IPane[]> (Globals.atom.workspace.getPanes())
    [ for pane in panes do
          for item in pane.getItems() do
              if getTitle item = "F# Interactive" then yield pane, item ]
    |> List.tryPick Some
        
/// Opens or activates the F# Interactive panel
let private openFsiPane () =
    Async.FromContinuations(fun (cont, econt, ccont) ->
        match tryFindFsiPane () with
        | Some(pane, item) ->
            // Activate FSI and then switch back
            let prevPane = Globals.atom.workspace.getActivePane()
            let prevItem = prevPane.getActiveItem()
            pane.activateItem(item) |> ignore
            pane.activate() |> ignore
            prevPane.activate() |> ignore
            prevPane.activateItem(prevItem) |> ignore
            cont ()
        | None ->
            Globals.atom.workspace
              ._open("F# Interactive", {split = "right"})
              ._done((fun ed -> cont ()) |> unbox<Function>))

/// Get the code for current file/line/selection, together with line number
let private getFsiSelection kind =
    let editor = Globals.atom.workspace.getActiveTextEditor()
    match kind with
    | File -> 1, editor.getText() 
    | Line -> 
        let line = editor.getCursorBufferPosition().row
        int line+1, editor.lineTextForBufferRow(line).Trim()
    | Selection ->
        let line = editor.getSelectedBufferRange().start.row
        int line+1, editor.getSelectedText()

/// Send the current line/file/selection to FSI
let private sendToFsi kind = async {
    let editor = Globals.atom.workspace.getActiveTextEditor()
    if isFSharpEditor editor then
        do! openFsiPane()
        let line, code = getFsiSelection kind
        appendFsiInput code

        let! res = InteractiveServer.eval (editor.getPath()) line (code + ";;")
        appendFsiResult res }

// Repeatedly check for output produced in background
let private checkOutputLoop () = async {
    while InteractiveServer.isRunning() do
        let! output = InteractiveServer.output()
        if output <> null && output <> "" then appendFsiOutput output
        do! Async.Sleep(500) }


// --------------------------------------------------------------------------------------
// Activate / deactivate the FSI plugin
// --------------------------------------------------------------------------------------

[<ReflectedDefinition>]
type Fsi() =
    member x.activate(state:obj) =
        // Start the F# Interactive Suave server & check for outputs
        InteractiveServer.start ()
        checkOutputLoop () |> Async.StartImmediate

        // Register command to open F# Interactive & handler that loads the FSI panel GUI
        Globals.atom.commands.add("atom-workspace", "FSI:Open", fun () ->
            Async.StartImmediate (openFsiPane ()))
        Globals.atom.workspace.addOpener(fun uri ->
            try 
                if uri.EndsWith "F# Interactive" then box (newFsiView ())
                else null
            with _ -> null)

        // Register commands that close/reset/clear the current FSI output
        Globals.atom.commands.add("atom-text-editor", "FSI:Reset-REPL", fun () ->
            InteractiveServer.reset() |> Async.StartImmediate
            clearFsiPane() )
        Globals.atom.commands.add("atom-text-editor", "FSI:Cancel-REPL", fun () ->
            InteractiveServer.cancel() |> Async.StartImmediate )
        Globals.atom.commands.add("atom-text-editor", "FSI:Clear-REPL", fun () ->
            clearFsiPane() )

        // Register commands that send some F# code to F# Interactive
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Line", fun () ->
            sendToFsi Line |> Async.StartImmediate)
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-Selection", fun () ->
            sendToFsi Selection |> Async.StartImmediate)
        Globals.atom.commands.add("atom-text-editor", "FSI:Send-File", fun () ->
            sendToFsi File |> Async.StartImmediate)


    member x.deactivate() =
        // Stop the F# Interactive Suave server
        InteractiveServer.stop ()
