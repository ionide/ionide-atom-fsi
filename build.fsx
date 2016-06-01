// --------------------------------------------------------------------------------------
// FAKE build script
// --------------------------------------------------------------------------------------

#I "packages/FAKE/tools"
#r "packages/FAKE/tools/FakeLib.dll"
open System
open System.IO
open Fake
open Fake.Git
open Fake.ProcessHelper
open Fake.ReleaseNotesHelper
open Fake.ZipHelper

#if MONO
#else

#load "src/atom-bindings.fsx"
#load "paket-files/ionide/ionide-fsharp/src/Core/Control.fs"
#load "paket-files/ionide/ionide-fsharp/src/Core/Logging.fs"
#load "src/InteractiveServer.fs"
#load "src/InteractivePane.fs"
#load "src/main.fs"

#endif

// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitOwner = "Ionide"
let gitHome = "https://github.com/" + gitOwner

// The name of the project on GitHub
let gitName = "ionide-fsi"

// The url for the raw files hosted
let gitRaw = environVarOrDefault "gitRaw" "https://raw.github.com/Ionide"

let tempReleaseDir = "temp/release"

// Read additional information from the release notes document
let releaseNotesData =
    File.ReadAllLines "RELEASE_NOTES.md"
    |> parseAllReleaseNotes

let release = List.head releaseNotesData

let apmTool = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData) </> "atom" </> "bin" </> "apm.cmd"

// --------------------------------------------------------------------------------------
// Build the Generator project and run it
// --------------------------------------------------------------------------------------

Target "Clean" (fun _ ->
    CleanDir "temp/release"
)

let releaseBin  = "release/bin"
let fsisBin     = "paket-files/github.com/ionide/FsInteractiveService/bin/FsInteractiveService"

Target "CopyFSIS" (fun _ ->
    ensureDirectory releaseBin
    CleanDir releaseBin

    !! (fsisBin + "/*")
    |> CopyFiles  releaseBin 
)

Target "BuildGenerator" (fun () ->
    [ __SOURCE_DIRECTORY__ @@ "src" @@ "Ionide.Fsi.fsproj" ]
    |> MSBuildDebug "" "Rebuild"
    |> Log "AppBuild-Output: "
)

Target "RunGenerator" (fun () ->

        (TimeSpan.FromMinutes 5.0)
        |> ProcessHelper.ExecProcess (fun p ->
            p.FileName <- __SOURCE_DIRECTORY__ @@ "src" @@ "bin" @@ "Debug" @@ "Ionide.Fsi.exe" )
        |> ignore
)
#if MONO
#else
Target "RunScript" (fun () ->
    Ionide.Fsi.Generator.translateModules "../release/lib/fsi.js"
)
#endif

Target "InstallDependencies" (fun _ ->
    let args = "install"

    let srcDir = "release"
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- srcDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
)

Target "TagDevelopBranch" (fun _ ->
    StageAll ""
    Git.Commit.Commit "" (sprintf "Bump version to %s" release.NugetVersion)
    Branches.pushBranch "" "origin" "develop"

    let tagName = "develop-" + release.NugetVersion
    Branches.tag "" tagName
    Branches.pushTag "" "origin" tagName
)


Target "PushToMaster" (fun _ ->
    CleanDir tempReleaseDir
    Repository.cloneSingleBranch "" (gitHome + "/" + gitName + ".git") "master" tempReleaseDir

    let cleanEverythingFromLastCheckout() =
        let tempGitDir = Path.GetTempPath() </> "gitrelease"
        CleanDir tempGitDir
        CopyRecursive (tempReleaseDir </> ".git") tempGitDir true |> ignore
        CleanDir tempReleaseDir
        CopyRecursive tempGitDir (tempReleaseDir  </> ".git") true |> ignore

    cleanEverythingFromLastCheckout()
    CopyRecursive "release" tempReleaseDir true |> tracefn "%A"
    CopyFiles tempReleaseDir ["README.md"; "RELEASE_NOTES.md"; "LICENSE" ]

    StageAll tempReleaseDir
    Git.Commit.Commit tempReleaseDir (sprintf "Release %s" release.NugetVersion)
    Branches.push tempReleaseDir
)

Target "Release" (fun _ ->
    let args = sprintf "publish %s" release.NugetVersion
    let result =
        ExecProcess (fun info ->
            info.FileName <- apmTool
            info.WorkingDirectory <- tempReleaseDir
            info.Arguments <- args) System.TimeSpan.MaxValue
    if result <> 0 then failwithf "Error during running apm with %s" args
    DeleteDir "temp/release"
)

// --------------------------------------------------------------------------------------
// Run generator by default. Invoke 'build <Target>' to override
// --------------------------------------------------------------------------------------

Target "Default" DoNothing
Target "Build" DoNothing

#if MONO
"Clean"
  ==> "BuildGenerator"
  ==> "RunGenerator"
  ==> "InstallDependencies"
#else
"Clean"
  ==> "RunScript"
  ==> "InstallDependencies"
#endif

"InstallDependencies"
  ==> "Default"
  ==> "CopyFSIS"
  ==> "Build"    
  ==> "TagDevelopBranch"
  ==> "PushToMaster"
  ==> "Release"

RunTargetOrDefault "Default"
