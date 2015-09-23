var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var path = require('path');

function wrappedFunScript() { 
var ViewsHelpers__isFSharpEditor$, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, TupleString____Int32, TupleDisposable__Int32, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__ToArray$String___String___, Seq__OfArray$String___String___, Seq__IterateIndexed$String___String___, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$String___String___, Seq__FromFactory$Disposable_Disposable_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__Enumerator$String___String___, Seq__Enumerator$Disposable_Disposable_, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Process__spawnSame$, Process__isWin$, Options___ctor$, Option__Iterate$IEditor_IEditor_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$IEditor_IEditor_, Option__IsSome$ChildProcess_ChildProcess_, Option__IsNone$ChildProcess_ChildProcess_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$Int32_Int32, Option__GetValue$IEditor_IEditor_, Option__GetValue$ChildProcess_ChildProcess_, OpenEditorOptions___ctor$, Fsi__deactivate$, Fsi__activate$, Fsi___ctor$, FsiService__subscriptions, FsiService__startFsi$, FsiService__sendToFsi$, FsiService__sendSelection$, FsiService__sendLine$, FsiService__sendFile$, FsiService__resetFsi$, FsiService__openFsi$, FsiService__handle$, FsiService__get_subscriptions$, FsiService__get_fsipath$, FsiService__get_fsiProc$, FsiService__get_fsiEditor$, FsiService__fsipath, FsiService__fsiProc, FsiService__fsiEditor, FsiService__deactivate$, FsiService__activate$, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Disposable___ctor$Disposable_, Array__ZeroCreate$String___String___, Array__MapIndexed$String_1_String___String_String___, Array__Map$String_1_String___String_String___, Array__Length$String_1String, Array__Length$IEditor_IEditor_, Array__Iterate$IEditor_IEditor_, Array__FoldIndexed$Unit__IEditor_Unit__IEditor_, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__Fold$IEditor__Unit_IEditor__Unit_, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$;
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Concat$String_1String = (function(xs)
{
    return Array__ConcatImpl$String_1String(Seq__ToArray$String___String___(xs));
});
Array__ConcatImpl$String_1String = (function(xss)
{
    return [].concat.apply([], xss);;
});
Array__Fold$IEditor__Unit_IEditor__Unit_ = (function(f,seed,xs)
{
    return Array__FoldIndexed$Unit__IEditor_Unit__IEditor_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__Fold$String_1_String___String_String___ = (function(f,seed,xs)
{
    return Array__FoldIndexed$String____String_1String____String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldIndexed$String____String_1String____String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__FoldIndexed$Unit__IEditor_Unit__IEditor_ = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$IEditor_IEditor_(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Iterate$IEditor_IEditor_ = (function(f,xs)
{
    var _616;
    return Array__Fold$IEditor__Unit_IEditor__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _616, xs);
});
Array__Length$IEditor_IEditor_ = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Map$String_1_String___String_String___ = (function(f,xs)
{
    return Array__MapIndexed$String_1_String___String_String___((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$String_1_String___String_String___ = (function(f,xs)
{
    var ys = Array__ZeroCreate$String___String___(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
CreateEnumerable_1_Disposable___ctor$Disposable_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
FsiService__activate$ = (function(unitVar0)
{
    var ignored0 = (((window.atom).commands).add("atom-workspace", "FSI:Open", (function(arg00_)
    {
      return FsiService__openFsi$();
    })));
    var _ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-Line", (function(arg00_)
    {
      return FsiService__sendLine$();
    })));
    var __ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-Selection", (function(arg00_)
    {
      return FsiService__sendSelection$();
    })));
    var ___ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Send-File", (function(arg00_)
    {
      return FsiService__sendFile$();
    })));
    var ____ignored0 = (((window.atom).commands).add("atom-text-editor", "FSI:Reset-REPL", (function(arg00_)
    {
      return FsiService__resetFsi$();
    })));
    Array__Iterate$IEditor_IEditor_((function(e)
    {
      if (((e.getTitle()) == "F# Interactive")) 
      {
        return FsiService__openFsi$();
      }
      else
      {
        ;
      };
    }), (((window.atom).workspace).getTextEditors()));
    FsiService__fsipath = (((window.atom).config).get("ionide-fsi.FsiPath"));
    var s = (((window.atom).config).onDidChange("ionide-fsi.FsiPath", (function(n)
    {
      FsiService__fsipath = n.newValue;
    })));
    FsiService__subscriptions.push(s);
    if (((!Process__isWin$()) && (FsiService__fsipath == "C:/Program Files (x86)/Microsoft SDKs/F#/4.0/Framework/v4.0/Fsi.exe"))) 
    {
      (((window.atom).config).set("ionide-fsi.FsiPath", "fsharpi"));
      FsiService__fsipath = "fsharpi";
    }
    else
    {
      ;
    };
});
FsiService__deactivate$ = (function(unitVar0)
{
    Seq__Iterate$Disposable_Disposable_((function(n)
    {
      return (n.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(FsiService__subscriptions));
    (FsiService__subscriptions = []);
});
FsiService__get_fsiEditor$ = (function()
{
    return {Tag: 0.000000};
});
FsiService__get_fsiProc$ = (function()
{
    return {Tag: 0.000000};
});
FsiService__get_fsipath$ = (function()
{
    return "";
});
FsiService__get_subscriptions$ = (function()
{
    return [];
});
FsiService__handle$ = (function(data)
{
    if ((data != null)) 
    {
      var response = String__Replace$(data.toString(), "\\", "\\\\");
      return Option__Iterate$IEditor_IEditor_((function(ed)
      {
        var ignored0 = (ed.insertText(response));
      }), FsiService__fsiEditor);
    }
    else
    {
      ;
    };
});
FsiService__openFsi$ = (function(unitVar0)
{
    var edit = (((window.atom).workspace).getActiveTextEditor());
    return ((((window.atom).workspace).open("F# Interactive", (new OpenEditorOptions___ctor$("right")))).done((function(ed)
    {
      FsiService__fsiEditor = {Tag: 1.000000, Value: ed};
      var view = (((window.atom).views).getView(ed));
      view.component.setInputEnabled(false);
      if ((FsiService__fsipath != "")) 
      {
        return FsiService__resetFsi$();
      }
      else
      {
        ;
      };
    })));
});
FsiService__resetFsi$ = (function(unitVar0)
{
    if (Option__IsSome$ChildProcess_ChildProcess_(FsiService__fsiProc)) 
    {
      (Option__GetValue$ChildProcess_ChildProcess_(FsiService__fsiProc).kill());
    }
    else
    {
      ;
    };
    if (Option__IsSome$IEditor_IEditor_(FsiService__fsiEditor)) 
    {
      FsiService__startFsi$();
      var ignored0 = ((Option__GetValue$IEditor_IEditor_(FsiService__fsiEditor).buffer).reload());
    }
    else
    {
      ;
    };
});
FsiService__sendFile$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    FsiService__sendToFsi$((editor.getText()));
});
FsiService__sendLine$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    FsiService__sendToFsi$((editor.lineTextForBufferRow(((editor.getCursorBufferPosition()).row))).trim());
    (editor.moveDown(1.000000));
    (editor.moveToBeginningOfLine());
});
FsiService__sendSelection$ = (function(unitVar0)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    FsiService__sendToFsi$((editor.getSelectedText()));
    (editor.moveDown(1.000000));
    (editor.moveToBeginningOfLine());
});
FsiService__sendToFsi$ = (function(msg_)
{
    if (Option__IsNone$ChildProcess_ChildProcess_(FsiService__fsiProc)) 
    {
      FsiService__openFsi$();
    }
    else
    {
      ;
    };
    var editor = (((window.atom).workspace).getActiveTextEditor());
    if (ViewsHelpers__isFSharpEditor$(editor)) 
    {
      var dir = (path.dirname((editor.getPath())));
      var msg = (String__Replace$(msg_, "﻿", "") + ";;\n");
      Option__Iterate$IEditor_IEditor_((function(ed)
      {
        var ignored0 = (ed.insertText(msg));
      }), FsiService__fsiEditor);
      return Option__Iterate$ChildProcess_ChildProcess_((function(cproc)
      {
        var cd = (("#cd \"\"\"" + dir) + "\"\"\";;\n");
        ((cproc.stdin).write(cd, "utf-8"));
        return ((cproc.stdin).write(msg, "utf-8"));
      }), FsiService__fsiProc);
    }
    else
    {
      ;
    };
});
FsiService__startFsi$ = (function(unitVar0)
{
    var fs = Process__spawnSame$(FsiService__fsipath, "");
    FsiService__fsiProc = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(fs);
    var ignored0 = ((fs.stderr).on("data", (function(data)
    {
      return FsiService__handle$(data);
    })));
    var _ignored0 = ((fs.stdout).on("data", (function(data)
    {
      return FsiService__handle$(data);
    })));
});
Fsi___ctor$ = (function(unitVar0)
{
    {};
});
Fsi__activate$ = (function(x,state)
{
    FsiService__activate$();
});
Fsi__deactivate$ = (function(x,unitVar1)
{
    FsiService__deactivate$();
});
OpenEditorOptions___ctor$ = (function(split)
{
    var __this = this;
    __this.split = split;
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEditor_IEditor_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsNone$ChildProcess_ChildProcess_ = (function(option)
{
    return (!Option__IsSome$ChildProcess_ChildProcess_(option));
});
Option__IsSome$ChildProcess_ChildProcess_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEditor_IEditor_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__Iterate$ChildProcess_ChildProcess_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$ChildProcess_ChildProcess_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IEditor_IEditor_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IEditor_IEditor_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__spawnSame$ = (function(location,cmd)
{
    var _207;
    if ((cmd == "")) 
    {
      _207 = [];
    }
    else
    {
      _207 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _207;
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    return (child_process.spawn(location, cmd_, options));
});
ResizeArray_1_Object__get_Count$Object_ = (function(xs,unitVar1)
{
    return xs.length;
});
ResizeArray_1_Object__get_Item$Object_ = (function(xs,index)
{
    return xs[index];
});
ResizeArray__ToSeq$Disposable_Disposable_ = (function(xs)
{
    return Seq__Unfold$Int32__Disposable_Int32_Disposable_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleDisposable__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Fold$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_(f, seed, Seq__Enumerator$Disposable_Disposable_(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__String___Unit__String___ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$Disposable_Disposable_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Disposable___ctor$Disposable_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _90;
        return __.factory(_90);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _319;
        return __.factory(_319);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Disposable_Disposable_ = (function(f,xs)
{
    var _98;
    return Seq__Fold$Disposable__Unit_Disposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _98, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _339;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _339, xs);
});
Seq__OfArray$String___String___ = (function(xs)
{
    return Seq__Unfold$Int32__String___Int32_String___((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString____Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__ToArray$String___String___ = (function(xs)
{
    var ys = Array__ZeroCreate$String___String___(0);
    Seq__IterateIndexed$String___String___((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__Unfold$Int32__Disposable_Int32_Disposable_ = (function(f,seed)
{
    return Seq__FromFactory$Disposable_Disposable_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _68;
            return next(_68);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String___Int32_String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _297;
            return next(_297);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
String__Replace$ = (function(s,search,replace)
{
    var splits = s.split(search);
    return splits.join(replace);
});
String__SplitWithoutOptions$ = (function(s,delimiters)
{
    var folder = (function(inputs)
    {
      return (function(delimiter)
      {
        return Array__Concat$String_1String(Seq__OfArray$String___String___(Array__Map$String_1_String___String_String___((function(inp)
        {
          return inp.split(delimiter);
        }), inputs)));
      });
    });
    var state = [s];
    return (function(array)
    {
      return Array__Fold$String_1_String___String_String___(folder, state, array);
    })(delimiters);
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
TupleDisposable__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
ViewsHelpers__isFSharpEditor$ = (function(editor)
{
    return (((editor != undefined) && (editor["getGrammar"] != undefined)) && (((editor.getGrammar()).name).indexOf("F#") >= 0));
});
FsiService__subscriptions = FsiService__get_subscriptions$();
FsiService__fsiEditor = FsiService__get_fsiEditor$();
FsiService__fsipath = FsiService__get_fsipath$();
FsiService__fsiProc = FsiService__get_fsiProc$();
return [(function(ign)
{
    return (new Fsi___ctor$());
}), (function(_this)
{
    return Fsi__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return Fsi__activate$(_this, p0);
    });
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = IonideFSI = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); },
config : {
            FsiPath: {type: 'string', 'default': 'C:/Program Files (x86)/Microsoft SDKs/F#/4.0/Framework/v4.0/Fsi.exe'}
            }
};