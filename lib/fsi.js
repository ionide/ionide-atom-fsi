var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var fs = require('fs');
var util = require('util');
var path = require('path');
var Emitter = require('event-kit').Emitter;
var FsiView = require('./fsi-view')

function wrappedFunScript() { 
var list_1_Tuple_2_String__String__NilTuple_2_String__String_, list_1_Tuple_2_String__String__ConsTuple_2_String__String_, list_1_Tuple_2_IPane__Object__NilTuple_2_IPane__Object_, list_1_Tuple_2_IPane__Object__ConsTuple_2_IPane__Object_, list_1_String____NilString___, list_1_String____ConsString___, list_1_String__NilString, list_1_String__ConsString, Web__sendRequest$Unit_Unit_, WebResponse___ctor$, WebResponse__GetResponseStream$, WebRequest__set_Method$, WebRequest__get_Method$, WebRequest__get_Headers$, WebRequest___ctor$, WebRequest__GetRequestStream$, WebRequest__Create$, WebRequest__AsyncGetResponse$, WebHeaderCollection__get_Values$, WebHeaderCollection__get_Keys$, WebHeaderCollection___ctor$, WebHeaderCollection__Add$, ViewsHelpers__jq$, ViewsHelpers__isFSharpEditor$, UnfoldEnumerator_2_Int32__String___ctor$Int32_String, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Object___ctor$Int32_Object_, UnfoldEnumerator_2_Int32__IPane___ctor$Int32_IPane_, UnfoldEnumerator_2_Int32__HtmlKeyValue___ctor$Int32_HtmlKeyValue_, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, UnfoldEnumerator_2_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_, UnfoldEnumerator_2_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_, UnfoldEnumerator_2_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, UnfoldEnumerator_2_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, UnfoldEnumerator_2_Boolean__Tuple_2_IPane__Object___ctor$Boolean_Tuple_2_IPane__Object_, UTF8Encoding___ctor$, UTF8Encoding__GetString$, UTF8Encoding__GetBytes$, TupleTuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_, TupleTuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_String, TupleString_Int32, TupleObject__Int32, TupleInt32_String, TupleIPane__Object_, TupleIPane__Int32, TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_, TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_, TupleHtmlKeyValue__Int32, TupleFSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_, TupleFSharpFunc_2_WebResponse__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_, TupleFSharpFunc_2_Unit__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_, TupleDisposable__Int32, TimeSpan__get_TicksPerMillisecond$, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, String__EndsWith$, Stream__get_Contents$, Stream___ctor$, Stream__Write$, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__String_1Int32_String, Seq__Unfold$Int32__Object_Int32_Object_, Seq__Unfold$Int32__IPane_Int32_IPane_, Seq__Unfold$Int32__HtmlKeyValue_Int32_HtmlKeyValue_, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__Unfold$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_, Seq__Unfold$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_, Seq__Unfold$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, Seq__Unfold$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__Unfold$Boolean__Tuple_2_IPane__Object_Boolean_Tuple_2_IPane__Object_, Seq__ToList$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__ToList$String_1String, Seq__ToArray$String___String___, Seq__ToArray$String_1String, Seq__Singleton$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__OfList$String___String___, Seq__OfArray$String___String___, Seq__OfArray$String_1String, Seq__OfArray$Object_Object_, Seq__OfArray$IPane_IPane_, Seq__OfArray$HtmlKeyValue_HtmlKeyValue_, Seq__Map$Object__IEnumerable_1_Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object_, Seq__Map$IPane__IEnumerable_1_Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$String_1String, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__FromFactory$String___String___, Seq__FromFactory$String_1String, Seq__FromFactory$Object_Object_, Seq__FromFactory$IPane_IPane_, Seq__FromFactory$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_, Seq__FromFactory$HtmlKeyValue_HtmlKeyValue_, Seq__FromFactory$Disposable_Disposable_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__String_1Unit__String, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexedAux$FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String, Seq__FoldIndexed$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$String_1_Unit_String_Unit_, Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__Fold$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_, Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__ExistsAux$HtmlKeyValue_HtmlKeyValue_, Seq__Exists$HtmlKeyValue_HtmlKeyValue_, Seq__Enumerator$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__Enumerator$String___String___, Seq__Enumerator$String_1String, Seq__Enumerator$Object_Object_, Seq__Enumerator$IPane_IPane_, Seq__Enumerator$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_, Seq__Enumerator$HtmlKeyValue_HtmlKeyValue_, Seq__Enumerator$Disposable_Disposable_, Seq__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__Delay$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Seq__Delay$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_, Seq__Concat$IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, Seq__Collect$Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, Seq__Collect$IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, SendSnippetKind__Selection, SendSnippetKind__Line, SendSnippetKind__File, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Replacements__utf8Encoding$, Process__spawn$, Process__isWin$, Process__getCwd$, Process__fromPath$, Options___ctor$, Option__Iterate$String_1String, Option__Iterate$Object_Object_, Option__Iterate$IEditor_IEditor_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_Object_IEnumerator_1_Object_, Option__IsSome$IEnumerator_1_IPane_IEnumerator_1_IPane_, Option__IsSome$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_, Option__IsSome$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__IsSome$ChildProcess_ChildProcess_, Option__IsSome$Boolean_Boolean, Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_, Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_, Option__GetValue$Tuple_2_Tuple_2_IPane__Object__Boolean_Tuple_2_Tuple_2_IPane__Object__Boolean_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_, Option__GetValue$Tuple_2_Object__Int32_Tuple_2_Object__Int32_, Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, Option__GetValue$Tuple_2_IPane__Int32_Tuple_2_IPane__Int32_, Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_, Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_, Option__GetValue$Tuple_2_HtmlKeyValue__Int32_Tuple_2_HtmlKeyValue__Int32_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$String_1String, Option__GetValue$Object_Object_, Option__GetValue$Int32_Int32, Option__GetValue$IEnumerator_1_Tuple_2_IPane__Object_IEnumerator_1_Tuple_2_IPane__Object_, Option__GetValue$IEnumerator_1_Object_IEnumerator_1_Object_, Option__GetValue$IEnumerator_1_IPane_IEnumerator_1_IPane_, Option__GetValue$IEditor_IEditor_, Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_, Option__GetValue$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_, Option__GetValue$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$ChildProcess_ChildProcess_, Option__GetValue$CancellationToken_CancellationToken_, Option__GetValue$Boolean_Boolean, OpenOptions___ctor$, OpenEditorOptions___ctor$, Logger__subscriptions, Logger__logf$, Logger__logPath, Logger__get_subscriptions$, Logger__get_logPath$, Logger__get_fullLog$, Logger__get_editor$, Logger__get_active$, Logger__fullLog, Logger__emitLog$, Logger__editor, Logger__deactivate$, Logger__active, Logger__activate$, List__TryPickIndexedAux$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, List__TryPickIndexed$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, List__TryPick$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, List__ToArray$String_1String, List__Tail$String___String___, List__Tail$String_1String, List__Reverse$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, List__Reverse$String_1String, List__Map$Tuple_2_String__String__String_1Tuple_2_String__String__String, List__Length$String_1String, List__IterateIndexed$String_1String, List__Head$String___String___, List__Head$String_1String, List__FoldIndexedAux$list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_, List__FoldIndexedAux$list_1_String__Tuple_2_String__String_list_1_String__Tuple_2_String__String_, List__FoldIndexedAux$list_1_String__String_1list_1_String__String, List__FoldIndexedAux$Unit__String_1Unit__String, List__FoldIndexedAux$Int32__String_1Int32_String, List__FoldIndexed$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_, List__FoldIndexed$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_, List__FoldIndexed$String_1_list_1_String_String_list_1_String_, List__FoldIndexed$String_1_Unit_String_Unit_, List__FoldIndexed$String_1_Int32_String_Int32, List__Fold$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_, List__Fold$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_, List__Fold$String_1_list_1_String_String_list_1_String_, List__Fold$String_1_Int32_String_Int32, List__Empty$Tuple_2_String__String_Tuple_2_String__String_, List__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, List__Empty$String___String___, List__Empty$String_1String, List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_, List__CreateCons$Tuple_2_IPane__Object_Tuple_2_IPane__Object_, List__CreateCons$String___String___, List__CreateCons$String_1String, InteractiveServer__url$, InteractiveServer__stop$, InteractiveServer__start$, InteractiveServer__service, InteractiveServer__reset$, InteractiveServer__request$Result_1_Unit_Result_1_Unit_, InteractiveServer__port, InteractiveServer__output$, InteractiveServer__isRunning$, InteractiveServer__get_service$, InteractiveServer__get_port$, InteractiveServer__genPort$, InteractiveServer__eval$, InteractiveServer__cancel$, Fsi__deactivate$, Fsi__activate$, Fsi___ctor$, Fsi_1_tryFindFsiPane$, Fsi_1_trimEnd$, Fsi_1_setupIFrameResizeHandler$, Fsi_1_sendToFsi$, Fsi_1_openFsiPane$, Fsi_1_navigateToEditor$, Fsi_1_iframeElement$, Fsi_1_iframeBody, Fsi_1_get_iframeBody$, Fsi_1_getFsiSelection$, Fsi_1_clearFsiPane$, Fsi_1_checkOutputLoop$, Fsi_1_appendFsiResult$, Fsi_1_appendFsiPanel$, Fsi_1_appendFsiOutput$, Fsi_1_appendFsiInput$, Fsi_1_appendFsiHtmlPanel$, Fsi_1_appendFsiException$, Fsi_1_appendErrors$, FSharpString__Concat$, EvaluationResult__Success, EvaluationResult__Exception, EvaluationResult__Error, EvalRequest___ctor$, DateTime__get_Ticks$, DateTime__get_Now$, DateTime__createUnsafe$, DateTime__ToLongTimeString$, CreateEnumerable_1_Tuple_2_IPane__Object___ctor$Tuple_2_IPane__Object_, CreateEnumerable_1_String___ctor$String, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, CreateEnumerable_1_IPane___ctor$IPane_, CreateEnumerable_1_IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerable_1_Tuple_2_IPane__Object_, CreateEnumerable_1_HtmlKeyValue___ctor$HtmlKeyValue_, CreateEnumerable_1_Disposable___ctor$Disposable_, Control__CommandRegistry_subscribe$, Control__CommandRegistry_add$, CancellationToken___ctor$, CancellationToken__ThrowIfCancellationRequested$, Async__protectedCont$WebResponse_WebResponse_, Async__protectedCont$Unit_Unit_, Async__protectedCont$String_1String, Async__protectedCont$Result_1_Unit_Result_1_Unit_, Async__protectedCont$JQuery_JQuery_, Async__protectedCont$EvaluationResult_EvaluationResult_, Async__invokeCont$Unit_Unit_, Async__invokeCont$String_1String, Async__invokeCont$Result_1_Unit_Result_1_Unit_, Async__invokeCont$JQuery_JQuery_, Async__invokeCont$EvaluationResult_EvaluationResult_, Async__get_async$, Async_1_WebResponse__ContWebResponse_, Async_1_Unit__ContUnit_, Async_1_String__ContString, Async_1_StartImmediate$, Async_1_Sleep$, Async_1_Result_1_Unit__ContResult_1_Unit_, Async_1_JQuery__ContJQuery_, Async_1_FromContinuations$WebResponse_WebResponse_, Async_1_FromContinuations$Unit_Unit_, Async_1_EvaluationResult__ContEvaluationResult_, AsyncParams_1_WebResponse___ctor$WebResponse_, AsyncParams_1_Unit___ctor$Unit_, AsyncParams_1_String___ctor$String, AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_, AsyncParams_1_JQuery___ctor$JQuery_, AsyncParams_1_EvaluationResult___ctor$EvaluationResult_, AsyncParamsAux___ctor$, AsyncBuilder___ctor$, AsyncBuilder__Zero$, AsyncBuilder__While$, AsyncBuilder__TryWith$Result_1_Unit_Result_1_Unit_, AsyncBuilder__Return$Unit_Unit_, AsyncBuilder__Return$String_1String, AsyncBuilder__Return$Result_1_Unit_Result_1_Unit_, AsyncBuilder__Return$JQuery_JQuery_, AsyncBuilder__Return$EvaluationResult_EvaluationResult_, AsyncBuilder__For$HtmlKeyValue_HtmlKeyValue_, AsyncBuilder__Delay$Unit_Unit_, AsyncBuilder__Delay$String_1String, AsyncBuilder__Delay$Result_1_Unit_Result_1_Unit_, AsyncBuilder__Delay$JQuery_JQuery_, AsyncBuilder__Delay$EvaluationResult_EvaluationResult_, AsyncBuilder__Combine$Unit_Unit_, AsyncBuilder__Combine$String_1String, AsyncBuilder__Combine$JQuery_JQuery_, AsyncBuilder__Bind$WebResponse__Result_1_Unit_WebResponse__Result_1_Unit_, AsyncBuilder__Bind$Unit__Unit_Unit__Unit_, AsyncBuilder__Bind$Unit__String_1Unit__String, AsyncBuilder__Bind$Unit__JQuery_Unit__JQuery_, AsyncBuilder__Bind$String_1_Unit_String_Unit_, AsyncBuilder__Bind$Result_1_Unit__Unit_Result_1_Unit__Unit_, AsyncBuilder__Bind$Result_1_Unit__String_1Result_1_Unit__String, AsyncBuilder__Bind$Result_1_Unit__EvaluationResult_Result_1_Unit__EvaluationResult_, AsyncBuilder__Bind$JQuery__Unit_JQuery__Unit_, AsyncBuilder__Bind$EvaluationResult__Unit_EvaluationResult__Unit_, AsyncBuilder__Bind$EvaluationResult__JQuery_EvaluationResult__JQuery_, Array__ZeroCreate$String___String___, Array__ZeroCreate$String_1String, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$HtmlKeyValue__String_1HtmlKeyValue__String, Array__Map$String_1_String___String_String___, Array__Map$HtmlKeyValue__String_1HtmlKeyValue__String, Array__Length$TypeCheckError_TypeCheckError_, Array__Length$String_1String, Array__Length$Object_Object_, Array__Length$IPane_IPane_, Array__Length$HtmlKeyValue_HtmlKeyValue_, Array__GetSubArray$Byte_Byte, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$, Array__Append$Object_Object_, Array__Append$Byte_Byte;
Array__Append$Byte_Byte = (function(xs,ys)
{
    return xs.concat(ys);;
});
Array__Append$Object_Object_ = (function(xs,ys)
{
    return xs.concat(ys);;
});
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
Array__GetSubArray$Byte_Byte = (function(xs,offset,length)
{
    return xs.slice(offset, offset + length);;
});
Array__Length$HtmlKeyValue_HtmlKeyValue_ = (function(xs)
{
    return xs.length;;
});
Array__Length$IPane_IPane_ = (function(xs)
{
    return xs.length;;
});
Array__Length$Object_Object_ = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Length$TypeCheckError_TypeCheckError_ = (function(xs)
{
    return xs.length;;
});
Array__Map$HtmlKeyValue__String_1HtmlKeyValue__String = (function(f,xs)
{
    return Array__MapIndexed$HtmlKeyValue__String_1HtmlKeyValue__String((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
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
Array__MapIndexed$HtmlKeyValue__String_1HtmlKeyValue__String = (function(f,xs)
{
    var ys = Array__ZeroCreate$String_1String(Array__Length$HtmlKeyValue_HtmlKeyValue_(xs));
    for (var i = 0; i <= (Array__Length$HtmlKeyValue_HtmlKeyValue_(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
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
Array__ZeroCreate$String_1String = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
AsyncBuilder__Bind$EvaluationResult__JQuery_EvaluationResult__JQuery_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$JQuery_JQuery_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_EvaluationResult___ctor$EvaluationResult_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$EvaluationResult__Unit_EvaluationResult__Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_EvaluationResult___ctor$EvaluationResult_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$JQuery__Unit_JQuery__Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_JQuery___ctor$JQuery_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Result_1_Unit__EvaluationResult_Result_1_Unit__EvaluationResult_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$EvaluationResult_EvaluationResult_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Result_1_Unit__String_1Result_1_Unit__String = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$String_1String((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Result_1_Unit__Unit_Result_1_Unit__Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$String_1_Unit_String_Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_String___ctor$String(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Unit__JQuery_Unit__JQuery_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$JQuery_JQuery_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Unit___ctor$Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Unit__String_1Unit__String = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$String_1String((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Unit___ctor$Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$Unit__Unit_Unit__Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Unit___ctor$Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Bind$WebResponse__Result_1_Unit_WebResponse__Result_1_Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Result_1_Unit_Result_1_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_WebResponse___ctor$WebResponse_(cont, k.Aux)));
    }));
});
AsyncBuilder__Combine$JQuery_JQuery_ = (function(x,work1,work2)
{
    return AsyncBuilder__Bind$Unit__JQuery_Unit__JQuery_(x, work1, (function(unitVar0)
    {
      return work2;
    }));
});
AsyncBuilder__Combine$String_1String = (function(x,work1,work2)
{
    return AsyncBuilder__Bind$Unit__String_1Unit__String(x, work1, (function(unitVar0)
    {
      return work2;
    }));
});
AsyncBuilder__Combine$Unit_Unit_ = (function(x,work1,work2)
{
    return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, work1, (function(unitVar0)
    {
      return work2;
    }));
});
AsyncBuilder__Delay$EvaluationResult_EvaluationResult_ = (function(x,f)
{
    return Async__protectedCont$EvaluationResult_EvaluationResult_((function(k)
    {
      var _3580;
      var patternInput = f(_3580);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__Delay$JQuery_JQuery_ = (function(x,f)
{
    return Async__protectedCont$JQuery_JQuery_((function(k)
    {
      var _4132;
      var patternInput = f(_4132);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__Delay$Result_1_Unit_Result_1_Unit_ = (function(x,f)
{
    return Async__protectedCont$Result_1_Unit_Result_1_Unit_((function(k)
    {
      var _1472;
      var patternInput = f(_1472);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__Delay$String_1String = (function(x,f)
{
    return Async__protectedCont$String_1String((function(k)
    {
      var _1811;
      var patternInput = f(_1811);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__Delay$Unit_Unit_ = (function(x,f)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var _2053;
      var patternInput = f(_2053);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__For$HtmlKeyValue_HtmlKeyValue_ = (function(x,seq,body)
{
    var enumerator = seq.GetEnumerator();
    return AsyncBuilder__While$(x, (function(unitVar0)
    {
      return enumerator.MoveNext();
    }), AsyncBuilder__Delay$Unit_Unit_(x, (function(unitVar0)
    {
      return body(enumerator.get_Current());
    })));
});
AsyncBuilder__Return$EvaluationResult_EvaluationResult_ = (function(x,v)
{
    return Async__protectedCont$EvaluationResult_EvaluationResult_((function(k)
    {
      return Async__invokeCont$EvaluationResult_EvaluationResult_(k, v);
    }));
});
AsyncBuilder__Return$JQuery_JQuery_ = (function(x,v)
{
    return Async__protectedCont$JQuery_JQuery_((function(k)
    {
      return Async__invokeCont$JQuery_JQuery_(k, v);
    }));
});
AsyncBuilder__Return$Result_1_Unit_Result_1_Unit_ = (function(x,v)
{
    return Async__protectedCont$Result_1_Unit_Result_1_Unit_((function(k)
    {
      return Async__invokeCont$Result_1_Unit_Result_1_Unit_(k, v);
    }));
});
AsyncBuilder__Return$String_1String = (function(x,v)
{
    return Async__protectedCont$String_1String((function(k)
    {
      return Async__invokeCont$String_1String(k, v);
    }));
});
AsyncBuilder__Return$Unit_Unit_ = (function(x,v)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      return Async__invokeCont$Unit_Unit_(k, v);
    }));
});
AsyncBuilder__TryWith$Result_1_Unit_Result_1_Unit_ = (function(x,_arg2,catchFunction)
{
    var v = _arg2.Item;
    return Async__protectedCont$Result_1_Unit_Result_1_Unit_((function(k)
    {
      CancellationToken__ThrowIfCancellationRequested$(k.Aux.CancellationToken);
      var inputRecord = k.Aux;
      var ExceptionCont = (function(ex)
      {
        return k.Cont(catchFunction(ex));
      });
      var Aux = (new AsyncParamsAux___ctor$(inputRecord.StackCounter, ExceptionCont, inputRecord.CancelledCont, inputRecord.CancellationToken));
      return v((new AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_(k.Cont, Aux)));
    }));
});
AsyncBuilder__While$ = (function(x,cond,body)
{
    var _2064;
    if (cond(_2064)) 
    {
      return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, body, (function(unitVar0)
      {
        return AsyncBuilder__While$(x, cond, body);
      }));
    }
    else
    {
      var _2072;
      return AsyncBuilder__Return$Unit_Unit_(x, _2072);
    };
});
AsyncBuilder__Zero$ = (function(x,unitVar1)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var _1560;
      return Async__invokeCont$Unit_Unit_(k, _1560);
    }));
});
AsyncBuilder___ctor$ = (function(unitVar0)
{
    {};
});
AsyncParamsAux___ctor$ = (function(StackCounter,ExceptionCont,CancelledCont,CancellationToken)
{
    var __this = this;
    __this.StackCounter = StackCounter;
    __this.ExceptionCont = ExceptionCont;
    __this.CancelledCont = CancelledCont;
    __this.CancellationToken = CancellationToken;
});
AsyncParams_1_EvaluationResult___ctor$EvaluationResult_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
AsyncParams_1_JQuery___ctor$JQuery_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
AsyncParams_1_Result_1_Unit___ctor$Result_1_Unit_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
AsyncParams_1_String___ctor$String = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
AsyncParams_1_Unit___ctor$Unit_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
AsyncParams_1_WebResponse___ctor$WebResponse_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
Async_1_EvaluationResult__ContEvaluationResult_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async_1_FromContinuations$Unit_Unit_ = (function(f)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      return f((new TupleFSharpFunc_2_Unit__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_(k.Cont, k.Aux.ExceptionCont, k.Aux.CancelledCont)));
    }));
});
Async_1_FromContinuations$WebResponse_WebResponse_ = (function(f)
{
    return Async__protectedCont$WebResponse_WebResponse_((function(k)
    {
      return f((new TupleFSharpFunc_2_WebResponse__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_(k.Cont, k.Aux.ExceptionCont, k.Aux.CancelledCont)));
    }));
});
Async_1_JQuery__ContJQuery_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async_1_Result_1_Unit__ContResult_1_Unit_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async_1_Sleep$ = (function(milliseconds)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var ignored0 = window.setTimeout((function(_arg1)
      {
        CancellationToken__ThrowIfCancellationRequested$(k.Aux.CancellationToken);
        var _2019;
        return k.Cont(_2019);
      }), milliseconds);
    }));
});
Async_1_StartImmediate$ = (function(workflow,cancellationToken)
{
    var _2075;
    if ((cancellationToken.Tag == 1.000000)) 
    {
      var v = Option__GetValue$CancellationToken_CancellationToken_(cancellationToken);
      _2075 = v;
    }
    else
    {
      _2075 = (new CancellationToken___ctor$({Tag: 0.000000}));
    };
    var token = _2075;
    var f = workflow.Item;
    var aux = (new AsyncParamsAux___ctor$({contents: 0}, (function(value)
    {
      var ignored0 = value;
    }), (function(value)
    {
      var ignored0 = value;
    }), token));
    return f((new AsyncParams_1_Unit___ctor$Unit_((function(value)
    {
      var ignored0 = value;
    }), aux)));
});
Async_1_String__ContString = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async_1_Unit__ContUnit_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async_1_WebResponse__ContWebResponse_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async__get_async$ = (function()
{
    return (new AsyncBuilder___ctor$());
});
Async__invokeCont$EvaluationResult_EvaluationResult_ = (function(k,value)
{
    return k.Cont(value);
});
Async__invokeCont$JQuery_JQuery_ = (function(k,value)
{
    return k.Cont(value);
});
Async__invokeCont$Result_1_Unit_Result_1_Unit_ = (function(k,value)
{
    return k.Cont(value);
});
Async__invokeCont$String_1String = (function(k,value)
{
    return k.Cont(value);
});
Async__invokeCont$Unit_Unit_ = (function(k,value)
{
    return k.Cont(value);
});
Async__protectedCont$EvaluationResult_EvaluationResult_ = (function(f)
{
    return (new Async_1_EvaluationResult__ContEvaluationResult_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
Async__protectedCont$JQuery_JQuery_ = (function(f)
{
    return (new Async_1_JQuery__ContJQuery_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
Async__protectedCont$Result_1_Unit_Result_1_Unit_ = (function(f)
{
    return (new Async_1_Result_1_Unit__ContResult_1_Unit_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
Async__protectedCont$String_1String = (function(f)
{
    return (new Async_1_String__ContString((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
Async__protectedCont$Unit_Unit_ = (function(f)
{
    return (new Async_1_Unit__ContUnit_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
Async__protectedCont$WebResponse_WebResponse_ = (function(f)
{
    return (new Async_1_WebResponse__ContWebResponse_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
CancellationToken__ThrowIfCancellationRequested$ = (function(x,unitVar1)
{
    var matchValue = x.Cell;
    if ((matchValue.Tag == 1.000000)) 
    {
      var cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
      if (cell.contents) 
      {
        var _cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
        throw ("OperationCancelledException");
        return null;
      }
      else
      {
        ;
      };
    }
    else
    {
      ;
    };
});
CancellationToken___ctor$ = (function(Cell)
{
    var __this = this;
    __this.Cell = Cell;
});
Control__CommandRegistry_add$ = (function(x,name,command,func)
{
    var ignored0 = (x.add(name, command, func));
});
Control__CommandRegistry_subscribe$ = (function(x,name,command,func)
{
    return (x.add(name, command, func));
});
CreateEnumerable_1_Disposable___ctor$Disposable_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_HtmlKeyValue___ctor$HtmlKeyValue_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerable_1_Tuple_2_IPane__Object_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_IPane___ctor$IPane_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Object___ctor$Object_ = (function(factory)
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
CreateEnumerable_1_String___ctor$String = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Tuple_2_IPane__Object___ctor$Tuple_2_IPane__Object_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
DateTime__ToLongTimeString$ = (function(dt,unitVar1)
{
    return dt['to'+"LocaleTime"+'String']();
});
DateTime__createUnsafe$ = (function(value,kind)
{
    var date = value == null ? new Date() : new Date(value);
    if (isNaN(date)) { throw "The string was not recognized as a valid DateTime." }
    date.kind = kind;
    return date;
});
DateTime__get_Now$ = (function(unitVar0)
{
    return DateTime__createUnsafe$(null, 2);
});
DateTime__get_Ticks$ = (function(dt,unitVar1)
{
    return ((dt.getTime() + 62135604000000.000000) * TimeSpan__get_TicksPerMillisecond$());
});
EvalRequest___ctor$ = (function(file,line,code)
{
    var __this = this;
    __this.file = file;
    __this.line = line;
    __this.code = code;
});
EvaluationResult__Error = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Error";
    __this.Item = Item;
});
EvaluationResult__Exception = (function(Item)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Exception";
    __this.Item = Item;
});
EvaluationResult__Success = (function(Item)
{
    var __this = this;
    __this.Tag = 2.000000;
    __this._CaseName = "Success";
    __this.Item = Item;
});
FSharpString__Concat$ = (function(sep,strings)
{
    return Seq__ToArray$String_1String(strings).join(sep);
});
Fsi_1_appendErrors$ = (function(errors)
{
    var fsi = ViewsHelpers__jq$(".fsi");
    if ((Array__Length$TypeCheckError_TypeCheckError_(errors) == 0)) 
    {
      ;
    }
    else
    {
      var block = ((ViewsHelpers__jq$("\u003cdiv /\u003e").addClass("fsi-error-block")).appendTo(fsi));
      for (var _3791 = 0; _3791 <= (Array__Length$TypeCheckError_TypeCheckError_(errors) - 1); _3791++)
      {
        (function(idx)
        {
          var err = errors[idx];
          var copyOfStruct = err.severity.charAt(0);
          var niceSeverity = (copyOfStruct.toString().toUpperCase() + err.severity.substring(1));
          var niceMsg = Fsi_1_trimEnd$(".", err.message);
          var ignored0 = (((((ViewsHelpers__jq$("\u003cdiv /\u003e").addClass(("fsi-" + err.severity))).append(ViewsHelpers__jq$((((((("\u003cspan class=\"inline-block highlight-" + err.severity) + "\"\u003e") + niceSeverity) + " #") + err.errorNumber.toString()) + "\u003c/span\u003e")))).append((ViewsHelpers__jq$("\u003cspan class=\u0027msg\u0027/\u003e").text(niceMsg)))).append(((ViewsHelpers__jq$("\u003ca class=\u0027loc\u0027/\u003e").text((((" at line " + err.startLine.toString()) + " col ") + err.startColumn.toString()))).click((function(_arg1)
          {
            return Fsi_1_navigateToEditor$(err.fileName, (err.startLine - 1), err.startColumn);
          }))))).appendTo(block));
        })(_3791);
      };
    };
});
Fsi_1_appendFsiException$ = (function(text)
{
    return Fsi_1_appendFsiPanel$("fsi-exn-block", true, text);
});
Fsi_1_appendFsiHtmlPanel$ = (function(expanded,res)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      var pre = ((ViewsHelpers__jq$("\u003cpre /\u003e").text("(...)")).hide());
      var copyOfStruct = DateTime__get_Now$();
      var id = ("html" + DateTime__get_Ticks$(copyOfStruct).toString());
      var needsIframe = Seq__Exists$HtmlKeyValue_HtmlKeyValue_((function(kv)
      {
        return (kv.key == "script");
      }), Seq__OfArray$HtmlKeyValue_HtmlKeyValue_(res.parameters));
      var _3953;
      if ((!needsIframe)) 
      {
        _3953 = AsyncBuilder__Delay$JQuery_JQuery_(Async__get_async$(), (function(_unitVar)
        {
          var el = ((ViewsHelpers__jq$("\u003cdiv /\u003e").addClass("content")).html(res.body));
          return AsyncBuilder__Combine$JQuery_JQuery_(Async__get_async$(), AsyncBuilder__For$HtmlKeyValue_HtmlKeyValue_(Async__get_async$(), Seq__OfArray$HtmlKeyValue_HtmlKeyValue_(res.parameters), (function(_arg1)
          {
            var kv = _arg1;
            var ignored0 = (el.prepend(ViewsHelpers__jq$(kv.value)));
            return AsyncBuilder__Zero$(Async__get_async$());
          })), AsyncBuilder__Delay$JQuery_JQuery_(Async__get_async$(), (function(__unitVar)
          {
            return AsyncBuilder__Return$JQuery_JQuery_(Async__get_async$(), el);
          })));
        }));
      }
      else
      {
        _3953 = AsyncBuilder__Delay$JQuery_JQuery_(Async__get_async$(), (function(_unitVar)
        {
          var head = FSharpString__Concat$("\n", Seq__OfArray$String_1String(Array__Map$HtmlKeyValue__String_1HtmlKeyValue__String((function(kv)
          {
            return kv.value;
          }), res.parameters)));
          var registerIframe = (((("match fsi.HtmlPrinterParameters.TryGetValue(\"background-server\") with\n" + "| true, (:? System.Func\u003cstring, string\u003e as f) -\u003e f.Invoke(\"\"\"") + String__Replace$(String__Replace$(Fsi_1_iframeBody, "[head]", head), "[body]", res.body)) + "                                                          \"\"\")\n") + " | _ -\u003e null");
          return AsyncBuilder__Bind$EvaluationResult__JQuery_EvaluationResult__JQuery_(Async__get_async$(), InteractiveServer__eval$("/ionide.fsx", 1, registerIframe), (function(_arg2)
          {
            var url = _arg2;
            var el = (ViewsHelpers__jq$("\u003cdiv /\u003e").addClass("content"));
            if ((url.Tag == 2.000000)) 
            {
              var succ = url.Item;
              return AsyncBuilder__Return$JQuery_JQuery_(Async__get_async$(), (el.html(Fsi_1_iframeElement$(succ.details.string, id))));
            }
            else
            {
              return AsyncBuilder__Return$JQuery_JQuery_(Async__get_async$(), (el.html("Registering iframe failed.")));
            };
          }));
        }));
      };
      return AsyncBuilder__Bind$JQuery__Unit_JQuery__Unit_(Async__get_async$(), _3953, (function(_arg3)
      {
        var html = _arg3;
        var _4365;
        if (expanded) 
        {
          _4365 = "icon-chevron-down";
        }
        else
        {
          _4365 = "icon-chevron-right";
        };
        var icon = (ViewsHelpers__jq$("\u003cspan /\u003e").addClass(("icon " + _4365)));
        var padding = (((ViewsHelpers__jq$("\u003cdiv class=\u0027inset-panel padded\u0027/\u003e").append(icon)).append(pre)).append(html));
        var ignored0 = ((((ViewsHelpers__jq$((("\u003catom-panel id=\u0027" + id) + "\u0027 /\u003e")).addClass("top fsi-block fsi-html-block")).click((function(_arg1)
        {
          if (((pre.text()) == "(...)")) 
          {
            var _ignored0 = (icon.attr("class", "icon icon-chevron-down"));
            var __ignored0 = ((pre.hide()).text(""));
            var ___ignored0 = (html.show());
          }
          else
          {
            var ____ignored0 = (icon.attr("class", "icon icon-chevron-right"));
            var _____ignored0 = ((pre.text("(...)")).show());
            var ______ignored0 = (html.hide());
          };
          return {};
        }))).append((ViewsHelpers__jq$("\u003cdiv class=\u0027padded\u0027/\u003e").append(padding)))).appendTo(ViewsHelpers__jq$(".fsi")));
        return AsyncBuilder__Zero$(Async__get_async$());
      }));
    }));
});
Fsi_1_appendFsiInput$ = (function(input)
{
    return Fsi_1_appendFsiPanel$("fsi-in-block", false, input);
});
Fsi_1_appendFsiOutput$ = (function(expand,res)
{
    return Fsi_1_appendFsiPanel$("fsi-succ-block", expand, Fsi_1_trimEnd$("\u003e", res));
});
Fsi_1_appendFsiPanel$ = (function(cssclass,expanded,input)
{
    var _1916;
    if (expanded) 
    {
      _1916 = input;
    }
    else
    {
      _1916 = "(...)";
    };
    var pre = (ViewsHelpers__jq$("\u003cpre /\u003e").text(_1916));
    var _1923;
    if (expanded) 
    {
      _1923 = "icon-chevron-down";
    }
    else
    {
      _1923 = "icon-chevron-right";
    };
    var icon = (ViewsHelpers__jq$("\u003cspan /\u003e").addClass(("icon " + _1923)));
    var padding = ((ViewsHelpers__jq$("\u003cdiv class=\u0027inset-panel padded\u0027/\u003e").append(icon)).append(pre));
    var ignored0 = ((((ViewsHelpers__jq$("\u003catom-panel /\u003e").addClass(("top fsi-block " + cssclass))).click((function(_arg1)
    {
      if (((pre.text()) == "(...)")) 
      {
        var _ignored0 = (icon.attr("class", "icon icon-chevron-down"));
        var __ignored0 = (pre.text(input));
      }
      else
      {
        var ___ignored0 = (icon.attr("class", "icon icon-chevron-right"));
        var ____ignored0 = (pre.text("(...)"));
      };
      return {};
    }))).append((ViewsHelpers__jq$("\u003cdiv class=\u0027padded\u0027/\u003e").append(padding)))).appendTo(ViewsHelpers__jq$(".fsi")));
});
Fsi_1_appendFsiResult$ = (function(res)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      var _3601;
      if ((res.Tag == 1.000000)) 
      {
        var exn = res.Item;
        Fsi_1_appendFsiException$(exn.details);
        _3601 = AsyncBuilder__Zero$(Async__get_async$());
      }
      else
      {
        if ((res.Tag == 2.000000)) 
        {
          var succ = res.Item;
          Fsi_1_appendErrors$(succ.details.warnings);
          Fsi_1_appendFsiOutput$((succ.details.html == null), succ.output);
          if ((succ.details.html != null)) 
          {
            _3601 = AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(Async__get_async$(), Fsi_1_appendFsiHtmlPanel$(true, succ.details.html), (function(_arg1)
            {
              var _4443;
              return AsyncBuilder__Return$Unit_Unit_(Async__get_async$(), _4443);
            }));
          }
          else
          {
            _3601 = AsyncBuilder__Zero$(Async__get_async$());
          };
        }
        else
        {
          var errs = res.Item;
          Fsi_1_appendErrors$(errs.details);
          _3601 = AsyncBuilder__Zero$(Async__get_async$());
        };
      };
      return AsyncBuilder__Combine$Unit_Unit_(Async__get_async$(), _3601, AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(_unitVar)
      {
        var ignored0 = (ViewsHelpers__jq$(".fsi").scrollTop(99999999.000000));
        return AsyncBuilder__Zero$(Async__get_async$());
      })));
    }));
});
Fsi_1_checkOutputLoop$ = (function(unitVar0)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      return AsyncBuilder__While$(Async__get_async$(), (function(_unitVar)
      {
        return InteractiveServer__isRunning$();
      }), AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(_unitVar)
      {
        var _667;
        if (((ViewsHelpers__jq$(".fsi").length) > 0.000000)) 
        {
          _667 = AsyncBuilder__Bind$String_1_Unit_String_Unit_(Async__get_async$(), InteractiveServer__output$(), (function(_arg1)
          {
            var output = _arg1;
            if (((output != null) && (output != ""))) 
            {
              Fsi_1_appendFsiOutput$(true, output);
              var ignored0 = (ViewsHelpers__jq$(".fsi").scrollTop(99999999.000000));
              return AsyncBuilder__Zero$(Async__get_async$());
            }
            else
            {
              return AsyncBuilder__Zero$(Async__get_async$());
            };
          }));
        }
        else
        {
          _667 = AsyncBuilder__Zero$(Async__get_async$());
        };
        return AsyncBuilder__Combine$Unit_Unit_(Async__get_async$(), _667, AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(__unitVar)
        {
          return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(Async__get_async$(), Async_1_Sleep$(500), (function(_arg2)
          {
            var _2027;
            return AsyncBuilder__Return$Unit_Unit_(Async__get_async$(), _2027);
          }));
        })));
      })));
    }));
});
Fsi_1_clearFsiPane$ = (function(unitVar0)
{
    var ignored0 = (ViewsHelpers__jq$(".fsi").empty());
});
Fsi_1_getFsiSelection$ = (function(kind)
{
    var editor = (((window.atom).workspace).getActiveTextEditor());
    if ((kind.Tag == 0.000000)) 
    {
      var line = ((editor.getCursorBufferPosition()).row);
      var ignored0 = (editor.setCursorBufferPosition([(line + 1), 0]));
      return (new TupleInt32_String((line + 1), (editor.lineTextForBufferRow(line)).trim()));
    }
    else
    {
      if ((kind.Tag == 2.000000)) 
      {
        var _line = (((editor.getSelectedBufferRange()).start).row);
        return (new TupleInt32_String((_line + 1), (editor.getSelectedText())));
      }
      else
      {
        return (new TupleInt32_String(1, (editor.getText())));
      };
    };
});
Fsi_1_get_iframeBody$ = (function()
{
    return "\r\n  \u003c!DOCTYPE html\u003e\r\n  \u003chtml\u003e\r\n  \u003chead\u003e\r\n    \u003cscript src=\"https://code.jquery.com/jquery-2.2.4.min.js\"\u003e\u003c/script\u003e\r\n    \u003cstyle type=\"text/css\"\u003e\r\n      html, body { padding:0px; margin:0px; }\r\n    \u003c/style\u003e\r\n    \u003cscript type=\"text/javascript\"\u003e\r\n      window.fsiResizeContent = function(height) {\r\n        var qidx = window.location.href.indexOf(\u0027?\u0027);\r\n        if (qidx \u003e -1) {\r\n          var id = window.location.href.substr(qidx + 1);\r\n          if (height == null) height = $(\"body\").height();\r\n          window.parent.postMessage(\"height \" + id + \" \" + height,\"*\");\r\n        }\r\n      }\r\n    \u003c/script\u003e\r\n    [head]\r\n  \u003c/head\u003e\r\n  \u003cbody\u003e\r\n    [body]\r\n  \u003c/body\u003e\r\n  \u003c/html\u003e";
});
Fsi_1_iframeElement$ = (function(url,id)
{
    return ((((("\u003ciframe src=\"" + url) + "?") + id) + "\" ") + "style=\"border:none;width:100%;height:100px;\"\u003e\u003c/iframe\u003e");
});
Fsi_1_navigateToEditor$ = (function(file,line,col)
{
    var found = false;
    var arr = (((window.atom).workspace).getPanes());
    for (var _3780 = 0; _3780 <= (Array__Length$IPane_IPane_(arr) - 1); _3780++)
    {
      (function(idx)
      {
        var pane = arr[idx];
        var _arr = (pane.getItems());
        for (var _3779 = 0; _3779 <= (Array__Length$Object_Object_(_arr) - 1); _3779++)
        {
          (function(_idx)
          {
            var item = _arr[_idx];
            try
            {
              var ed = item;
              if (((ed.getPath()) == file)) 
              {
                (pane.activate());
                var ignored0 = (pane.activateItem(ed));
                var _ignored0 = (ed.setCursorBufferPosition([line, col]));
                found = true;
                null;
              }
              else
              {
                ;
              };
            }
            catch(matchValue){
              ;
            };
          })(_3779);
        };
      })(_3780);
    };
    if ((!found)) 
    {
      var ignored0 = (((window.atom).workspace).open(file, (new OpenOptions___ctor$(line, col))));
    }
    else
    {
      ;
    };
});
Fsi_1_openFsiPane$ = (function(unitVar0)
{
    return Async_1_FromContinuations$Unit_Unit_((function(tupledArg)
    {
      var cont = tupledArg.Items[0.000000];
      var econt = tupledArg.Items[1.000000];
      var ccont = tupledArg.Items[2.000000];
      var prevPane = (((window.atom).workspace).getActivePane());
      var prevItem = (prevPane.getActiveItem());
      var activateAndCont = (function(_unitVar0)
      {
        var ignored0 = (prevPane.activate());
        var _ignored0 = (prevPane.activateItem(prevItem));
        var _2125;
        return cont(_2125);
      });
      var matchValue = Fsi_1_tryFindFsiPane$();
      if ((matchValue.Tag == 0.000000)) 
      {
        Fsi_1_setupIFrameResizeHandler$();
        return ((((window.atom).workspace).open("F# Interactive", (new OpenEditorOptions___ctor$("right")))).done((function(ed)
        {
          var _3152;
          return activateAndCont(_3152);
        })));
      }
      else
      {
        var pane = Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(matchValue).Items[0.000000];
        var item = Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(matchValue).Items[1.000000];
        var ignored0 = (pane.activateItem(item));
        var _ignored0 = (pane.activate());
        var _3167;
        return activateAndCont(_3167);
      };
    }));
});
Fsi_1_sendToFsi$ = (function(kind)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      var editor = (((window.atom).workspace).getActiveTextEditor());
      if (ViewsHelpers__isFSharpEditor$(editor)) 
      {
        var patternInput = Fsi_1_getFsiSelection$(kind);
        var line = patternInput.Items[0.000000];
        var code = patternInput.Items[1.000000];
        return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(Async__get_async$(), Fsi_1_openFsiPane$(), (function(_arg1)
        {
          Fsi_1_appendFsiInput$(code);
          return AsyncBuilder__Bind$EvaluationResult__Unit_EvaluationResult__Unit_(Async__get_async$(), InteractiveServer__eval$((editor.getPath()), line, code), (function(_arg2)
          {
            var res = _arg2;
            return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(Async__get_async$(), Fsi_1_appendFsiResult$(res), (function(_arg3)
            {
              var _4471;
              return AsyncBuilder__Return$Unit_Unit_(Async__get_async$(), _4471);
            }));
          }));
        }));
      }
      else
      {
        return AsyncBuilder__Zero$(Async__get_async$());
      };
    }));
});
Fsi_1_setupIFrameResizeHandler$ = (function(unitVar0)
{
    return ((window.window).addEventListener("message", (function(e)
    {
      var data = Seq__ToList$String_1String(Seq__OfArray$String_1String(String__SplitWithoutOptions$(e.data, [" "])));
      if ((data.Tag == 1.000000)) 
      {
        if ((List__Head$String_1String(data) == "height")) 
        {
          if ((List__Tail$String_1String(data).Tag == 1.000000)) 
          {
            if ((List__Tail$String_1String(List__Tail$String_1String(data)).Tag == 1.000000)) 
            {
              if ((List__Tail$String_1String(List__Tail$String_1String(List__Tail$String_1String(data))).Tag == 0.000000)) 
              {
                var hgt = List__Head$String_1String(List__Tail$String_1String(List__Tail$String_1String(data)));
                var id = List__Head$String_1String(List__Tail$String_1String(data));
                var _3097;
                if ((hgt > 500.000000)) 
                {
                  _3097 = 500.000000;
                }
                else
                {
                  _3097 = hgt;
                };
                var _hgt = _3097;
                var ignored0 = (ViewsHelpers__jq$((("#" + id) + " iframe")).height((_hgt.toString() + "px")));
                var _ignored0 = (ViewsHelpers__jq$(".fsi").scrollTop(99999999.000000));
              }
              else
              {
                var _data = data;
                return Logger__logf$("FSI", "Unhandled window message: %O", [_data]);
              };
            }
            else
            {
              var __data = data;
              return Logger__logf$("FSI", "Unhandled window message: %O", [__data]);
            };
          }
          else
          {
            var ___data = data;
            return Logger__logf$("FSI", "Unhandled window message: %O", [___data]);
          };
        }
        else
        {
          var ____data = data;
          return Logger__logf$("FSI", "Unhandled window message: %O", [____data]);
        };
      }
      else
      {
        var _____data = data;
        return Logger__logf$("FSI", "Unhandled window message: %O", [_____data]);
      };
    })));
});
Fsi_1_trimEnd$ = (function(suffix,text)
{
    var _text = text.trim();
    var _1877;
    if (String__EndsWith$(_text, suffix)) 
    {
      _1877 = _text.substring(0, 0 + (_text.length - suffix.length));
    }
    else
    {
      _1877 = _text;
    };
    var __text = _1877;
    return __text.trim();
});
Fsi_1_tryFindFsiPane$ = (function(unitVar0)
{
    var panes = (((window.atom).workspace).getPanes());
    return List__TryPick$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    }), Seq__ToList$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(Seq__Delay$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar)
    {
      return Seq__Collect$IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(pane)
      {
        return Seq__Collect$Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(item)
        {
          if ((item.getTitle() == "F# Interactive")) 
          {
            return Seq__Singleton$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((new TupleIPane__Object_(pane, item)));
          }
          else
          {
            return Seq__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_();
          };
        }), Seq__OfArray$Object_Object_((pane.getItems())));
      }), Seq__OfArray$IPane_IPane_(panes));
    }))));
});
Fsi___ctor$ = (function(unitVar0)
{
    {};
});
Fsi__activate$ = (function(x,state)
{
    InteractiveServer__start$();
    Logger__activate$("FSI");
    Async_1_StartImmediate$(Fsi_1_checkOutputLoop$(), {Tag: 0.000000});
    Control__CommandRegistry_add$(((window.atom).commands), "atom-workspace", "FSI:Open", (function(unitVar0)
    {
      return Async_1_StartImmediate$(Fsi_1_openFsiPane$(), {Tag: 0.000000});
    }));
    (((window.atom).workspace).addOpener((function(uri)
    {
      try
      {
        if (String__EndsWith$(uri, "F# Interactive")) 
        {
          return new FsiView();
        }
        else
        {
          return null;
        };
      }
      catch(matchValue){
        return null;
      };
    })));
    Control__CommandRegistry_add$(((window.atom).commands), "atom-workspace", "FSI:Reset-REPL", (function(unitVar0)
    {
      Async_1_StartImmediate$(InteractiveServer__reset$(), {Tag: 0.000000});
      return Fsi_1_clearFsiPane$();
    }));
    Control__CommandRegistry_add$(((window.atom).commands), "atom-workspace", "FSI:Cancel-REPL", (function(unitVar0)
    {
      return Async_1_StartImmediate$(InteractiveServer__cancel$(), {Tag: 0.000000});
    }));
    Control__CommandRegistry_add$(((window.atom).commands), "atom-workspace", "FSI:Clear-REPL", (function(unitVar0)
    {
      return Fsi_1_clearFsiPane$();
    }));
    Control__CommandRegistry_add$(((window.atom).commands), "atom-text-editor", "FSI:Send-Line", (function(unitVar0)
    {
      return Async_1_StartImmediate$(Fsi_1_sendToFsi$((new SendSnippetKind__Line())), {Tag: 0.000000});
    }));
    Control__CommandRegistry_add$(((window.atom).commands), "atom-text-editor", "FSI:Send-Selection", (function(unitVar0)
    {
      return Async_1_StartImmediate$(Fsi_1_sendToFsi$((new SendSnippetKind__Selection())), {Tag: 0.000000});
    }));
    return Control__CommandRegistry_add$(((window.atom).commands), "atom-text-editor", "FSI:Send-File", (function(unitVar0)
    {
      return Async_1_StartImmediate$(Fsi_1_sendToFsi$((new SendSnippetKind__File())), {Tag: 0.000000});
    }));
});
Fsi__deactivate$ = (function(x,unitVar1)
{
    InteractiveServer__stop$();
    return Logger__deactivate$();
});
InteractiveServer__cancel$ = (function(unitVar0)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      return AsyncBuilder__Bind$Result_1_Unit__Unit_Result_1_Unit__Unit_(Async__get_async$(), InteractiveServer__request$Result_1_Unit_Result_1_Unit_(InteractiveServer__url$("cancel"), {Tag: 0.000000}), (function(_arg1)
      {
        var res = _arg1;
        if (((res == null) || (res.result != "cancel"))) 
        {
          Logger__logf$("ERROR", "Received unexpected response for \u0027cancel\u0027: %O", [res]);
          return AsyncBuilder__Zero$(Async__get_async$());
        }
        else
        {
          return AsyncBuilder__Zero$(Async__get_async$());
        };
      }));
    }));
});
InteractiveServer__eval$ = (function(file,line,code)
{
    return AsyncBuilder__Delay$EvaluationResult_EvaluationResult_(Async__get_async$(), (function(unitVar)
    {
      return AsyncBuilder__Bind$Result_1_Unit__EvaluationResult_Result_1_Unit__EvaluationResult_(Async__get_async$(), InteractiveServer__request$Result_1_Unit_Result_1_Unit_(InteractiveServer__url$("eval"), {Tag: 1.000000, Value: (new EvalRequest___ctor$(file, line, code))}), (function(_arg1)
      {
        var result = _arg1;
        var matchValue = result.result;
        if ((matchValue == "exception")) 
        {
          return AsyncBuilder__Return$EvaluationResult_EvaluationResult_(Async__get_async$(), (new EvaluationResult__Exception(result)));
        }
        else
        {
          if ((matchValue == "error")) 
          {
            return AsyncBuilder__Return$EvaluationResult_EvaluationResult_(Async__get_async$(), (new EvaluationResult__Error(result)));
          }
          else
          {
            if ((matchValue == "success")) 
            {
              return AsyncBuilder__Return$EvaluationResult_EvaluationResult_(Async__get_async$(), (new EvaluationResult__Success(result)));
            }
            else
            {
              Logger__logf$("ERROR", "Eval returned unexpected result: %O", [result]);
              throw ("Eval returned unexpected result");
              return AsyncBuilder__Return$EvaluationResult_EvaluationResult_(Async__get_async$(), null);
            };
          };
        };
      }));
    }));
});
InteractiveServer__genPort$ = (function(unitVar0)
{
    var r = ((window.Math).random());
    var r_ = ((r * (8999.000000 - 8100.000000)) + 8100.000000);
    return r_.toString().substring(0, 0 + 4);
});
InteractiveServer__get_port$ = (function()
{
    return InteractiveServer__genPort$();
});
InteractiveServer__get_service$ = (function()
{
    return {Tag: 0.000000};
});
InteractiveServer__isRunning$ = (function(unitVar0)
{
    return Option__IsSome$ChildProcess_ChildProcess_(InteractiveServer__service);
});
InteractiveServer__output$ = (function(unitVar0)
{
    return AsyncBuilder__Delay$String_1String(Async__get_async$(), (function(unitVar)
    {
      return AsyncBuilder__Bind$Result_1_Unit__String_1Result_1_Unit__String(Async__get_async$(), InteractiveServer__request$Result_1_Unit_Result_1_Unit_(InteractiveServer__url$("output"), {Tag: 0.000000}), (function(_arg1)
      {
        var res = _arg1;
        var _1542;
        if (((res == null) || (res.result != "output"))) 
        {
          Logger__logf$("ERROR", "Received unexpected response for \u0027output\u0027: %O", [res]);
          _1542 = AsyncBuilder__Zero$(Async__get_async$());
        }
        else
        {
          _1542 = AsyncBuilder__Zero$(Async__get_async$());
        };
        return AsyncBuilder__Combine$String_1String(Async__get_async$(), _1542, AsyncBuilder__Delay$String_1String(Async__get_async$(), (function(_unitVar)
        {
          return AsyncBuilder__Return$String_1String(Async__get_async$(), res.output);
        })));
      }));
    }));
});
InteractiveServer__request$Result_1_Unit_Result_1_Unit_ = (function(url,data)
{
    return AsyncBuilder__Delay$Result_1_Unit_Result_1_Unit_(Async__get_async$(), (function(unitVar)
    {
      return AsyncBuilder__TryWith$Result_1_Unit_Result_1_Unit_(Async__get_async$(), AsyncBuilder__Delay$Result_1_Unit_Result_1_Unit_(Async__get_async$(), (function(_unitVar)
      {
        Logger__logf$("FSI", "Sending request: %O", [data]);
        var r = WebRequest__Create$(url);
        var req = r;
        WebHeaderCollection__Add$(WebRequest__get_Headers$(req), "Accept", "application/json");
        WebHeaderCollection__Add$(WebRequest__get_Headers$(req), "Content-Type", "application/json");
        WebRequest__set_Method$(req, "POST");
        Option__Iterate$Object_Object_((function(_data)
        {
          var str = ((window.JSON).stringify(_data));
          var __data = UTF8Encoding__GetBytes$(Replacements__utf8Encoding$(), str);
          var stream = WebRequest__GetRequestStream$(req);
          return Stream__Write$(stream, __data, 0, Array__BoxedLength$(__data));
        }), data);
        return AsyncBuilder__Bind$WebResponse__Result_1_Unit_WebResponse__Result_1_Unit_(Async__get_async$(), WebRequest__AsyncGetResponse$(req), (function(_arg1)
        {
          var res = _arg1;
          var stream = WebResponse__GetResponseStream$(res);
          var json = UTF8Encoding__GetString$(Replacements__utf8Encoding$(), Stream__get_Contents$(stream));
          return AsyncBuilder__Return$Result_1_Unit_Result_1_Unit_(Async__get_async$(), ((window.JSON).parse(json)));
        }));
      })), (function(_arg2)
      {
        var e = _arg2;
        var _1481;
        if ((false != 0)) 
        {
          _1481 = e.toString();
        }
        else
        {
          _1481 = "\u003cnull\u003e";
        };
        var msg = _1481;
        Logger__logf$("ERROR", "Parsing response failed: %O", [e]);
        return AsyncBuilder__Return$Result_1_Unit_Result_1_Unit_(Async__get_async$(), null);
      }));
    }));
});
InteractiveServer__reset$ = (function(unitVar0)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      InteractiveServer__stop$();
      InteractiveServer__start$();
      return AsyncBuilder__Zero$(Async__get_async$());
    }));
});
InteractiveServer__start$ = (function(unitVar0)
{
    try
    {
      var _180;
      if (Process__isWin$()) 
      {
        _180 = "\\ionide-fsi\\bin\\FsInteractiveService.exe";
      }
      else
      {
        _180 = "/ionide-fsi/bin/FsInteractiveService.exe";
      };
      var pth = _180;
      var location = ((((window.atom).packages).packageDirPaths)[0] + pth);
      var child = Process__spawn$(location, Process__fromPath$("mono"), InteractiveServer__port);
      InteractiveServer__service = {Tag: 1.000000, Value: child};
      var ignored0 = ((child.stderr).on("data", (function(n)
      {
        return ((window.console).error(n.toString()));
      })));
    }
    catch(exc){
      ((window.console).error(exc));
      InteractiveServer__service = {Tag: 0.000000};
      var opt = ({});
      (opt.detail) = "Interactive services could not be spawned";
      null;
      (opt.dismissable) = true;
      null;
      var _ignored0 = (((window.atom).notifications).addError("Critical error", opt));
    };
});
InteractiveServer__stop$ = (function(unitVar0)
{
    Option__Iterate$ChildProcess_ChildProcess_((function(n)
    {
      return (n.kill("SIGKILL"));
    }), InteractiveServer__service);
    InteractiveServer__service = {Tag: 0.000000};
});
InteractiveServer__url$ = (function(s)
{
    var clo1 = String__PrintFormatToString$("http://localhost:%s/%s");
    return (function(arg10)
    {
      var clo2 = clo1(arg10);
      return (function(arg20)
      {
        return clo2(arg20);
      });
    })(InteractiveServer__port)(s);
});
List__CreateCons$String_1String = (function(x,xs)
{
    return (new list_1_String__ConsString(x, xs));
});
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__CreateCons$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(x,xs)
{
    return (new list_1_Tuple_2_IPane__Object__ConsTuple_2_IPane__Object_(x, xs));
});
List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_ = (function(x,xs)
{
    return (new list_1_Tuple_2_String__String__ConsTuple_2_String__String_(x, xs));
});
List__Empty$String_1String = (function()
{
    return (new list_1_String__NilString());
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
});
List__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function()
{
    return (new list_1_Tuple_2_IPane__Object__NilTuple_2_IPane__Object_());
});
List__Empty$Tuple_2_String__String_Tuple_2_String__String_ = (function()
{
    return (new list_1_Tuple_2_String__String__NilTuple_2_String__String_());
});
List__Fold$String_1_Int32_String_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexed$String_1_Int32_String_Int32((function(_arg1)
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
List__Fold$String_1_list_1_String_String_list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexed$String_1_list_1_String_String_list_1_String_((function(_arg1)
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
List__Fold$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_((function(_arg1)
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
List__Fold$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_((function(_arg1)
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
List__FoldIndexed$String_1_Int32_String_Int32 = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Int32__String_1Int32_String(f, 0, seed, xs);
});
List__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$Unit__String_1Unit__String(f, 0, seed, xs);
});
List__FoldIndexed$String_1_list_1_String_String_list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_String__String_1list_1_String__String(f, 0, seed, xs);
});
List__FoldIndexed$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(f, 0, seed, xs);
});
List__FoldIndexed$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_String__Tuple_2_String__String_list_1_String__Tuple_2_String__String_(f, 0, seed, xs);
});
List__FoldIndexedAux$Int32__String_1Int32_String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Int32__String_1Int32_String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$Unit__String_1Unit__String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$Unit__String_1Unit__String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_String__String_1list_1_String__String = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_String__String_1list_1_String__String(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_String__Tuple_2_String__String_list_1_String__Tuple_2_String__String_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_String__Tuple_2_String__String_list_1_String__Tuple_2_String__String_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__FoldIndexedAux$list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_list_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Head$String_1String = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Head$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__IterateIndexed$String_1String = (function(f,xs)
{
    var _1124;
    return List__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1124, xs);
});
List__Length$String_1String = (function(xs)
{
    return List__Fold$String_1_Int32_String_Int32((function(acc)
    {
      return (function(_arg1)
      {
        return (acc + 1);
      });
    }), 0, xs);
});
List__Map$Tuple_2_String__String__String_1Tuple_2_String__String__String = (function(f,xs)
{
    return List__Reverse$String_1String(List__Fold$Tuple_2_String__String__list_1_String_Tuple_2_String__String__list_1_String_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_String__ConsString(f(x), acc));
      });
    }), (new list_1_String__NilString()), xs));
});
List__Reverse$String_1String = (function(xs)
{
    return List__Fold$String_1_list_1_String_String_list_1_String_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_String__ConsString(x, acc));
      });
    }), (new list_1_String__NilString()), xs);
});
List__Reverse$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(xs)
{
    return List__Fold$Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__list_1_Tuple_2_IPane__Object_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Tuple_2_IPane__Object__ConsTuple_2_IPane__Object_(x, acc));
      });
    }), (new list_1_Tuple_2_IPane__Object__NilTuple_2_IPane__Object_()), xs);
});
List__Tail$String_1String = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Tail$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__ToArray$String_1String = (function(xs)
{
    var size = List__Length$String_1String(xs);
    var ys = Array__ZeroCreate$String_1String(size);
    List__IterateIndexed$String_1String((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
List__TryPick$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,xs)
{
    return List__TryPickIndexed$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
List__TryPickIndexed$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,xs)
{
    return List__TryPickIndexedAux$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(f, 0, xs);
});
List__TryPickIndexedAux$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,i,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      var result = f(i)(x);
      if ((result.Tag == 0.000000)) 
      {
        return List__TryPickIndexedAux$Tuple_2_IPane__Object__Tuple_2_IPane__Object_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Logger__activate$ = (function(name)
{
    Logger__active = true;
    Logger__logPath = {Tag: 1.000000, Value: (((window.atom).project).getPaths())[0]};
    return Logger__subscriptions.push(Control__CommandRegistry_subscribe$(((window.atom).commands), "atom-workspace", (("Debug:Show " + name) + " Log"), (function(_arg2)
    {
      return ((((window.atom).workspace).open("Debug log", (new OpenEditorOptions___ctor$("right")))).done((function(ed)
      {
        Logger__editor = {Tag: 1.000000, Value: ed};
        var ignored0 = (ed.onDidDestroy((function(_arg1)
        {
          Logger__editor = {Tag: 0.000000};
        })));
        var _ignored0 = (ed.insertText(Logger__fullLog));
        var view = (((window.atom).views).getView(ed));
        return view.component.setInputEnabled(false);
      })));
    })));
});
Logger__deactivate$ = (function(unitVar0)
{
    Logger__active = false;
    Logger__logPath = {Tag: 0.000000};
    Logger__editor = {Tag: 0.000000};
    Seq__Iterate$Disposable_Disposable_((function(s)
    {
      var ignored0 = (s.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(Logger__subscriptions));
    return (Logger__subscriptions = []);
});
Logger__emitLog$ = (function(category,message,data)
{
    var msg = ((("[" + category.toUpperCase()) + "] ") + message);
    if ((Array__BoxedLength$(data) == 0)) 
    {
      ((window.console).log(msg));
    }
    else
    {
      console.log.apply(console, Array__Append$Object_Object_([msg], data));
    };
    var copyOfStruct = DateTime__get_Now$();
    var timeString = String__Replace$(String__Replace$(DateTime__ToLongTimeString$(copyOfStruct), "\\", "."), "/", ".");
    var _msg = ((((("[" + timeString) + "] ") + category.toUpperCase()) + "\n  ") + String__Replace$(message, "%O", "%s"));
    var logLine = (util.format.apply(util, Array__Append$Object_Object_([_msg], data)) + "\n");
    Logger__fullLog = (Logger__fullLog + logLine);
    Option__Iterate$String_1String((function(p)
    {
      return (fs.appendFile((p + "/.ionide.debug"), logLine));
    }), Logger__logPath);
    return Option__Iterate$IEditor_IEditor_((function(e)
    {
      var ignored0 = (e.scrollToBufferPosition([(e.getLastBufferRow()), 0.000000], null));
      var _ignored0 = ((e.getBuffer()).append(logLine));
    }), Logger__editor);
});
Logger__get_active$ = (function()
{
    return false;
});
Logger__get_editor$ = (function()
{
    return {Tag: 0.000000};
});
Logger__get_fullLog$ = (function()
{
    return "";
});
Logger__get_logPath$ = (function()
{
    return {Tag: 0.000000};
});
Logger__get_subscriptions$ = (function()
{
    return [];
});
Logger__logf$ = (function(category,format,o)
{
    var debug = (((window.atom).config).get("ionide-fsharp.DeveloperMode"));
    if ((debug && Logger__active)) 
    {
      return Logger__emitLog$(category, format, o);
    }
    else
    {
      ;
    };
});
OpenEditorOptions___ctor$ = (function(split)
{
    var __this = this;
    __this.split = split;
});
OpenOptions___ctor$ = (function(initialLine,initialColumn)
{
    var __this = this;
    __this.initialLine = initialLine;
    __this.initialColumn = initialColumn;
});
Option__GetValue$Boolean_Boolean = (function(option)
{
    return option.Value;;
});
Option__GetValue$CancellationToken_CancellationToken_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEditor_IEditor_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_IPane_IEnumerator_1_IPane_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Object_IEnumerator_1_Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_Tuple_2_IPane__Object_IEnumerator_1_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Object_Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$String_1String = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_HtmlKeyValue__Int32_Tuple_2_HtmlKeyValue__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_IPane__Int32_Tuple_2_IPane__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__Int32_Tuple_2_Object__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Tuple_2_IPane__Object__Boolean_Tuple_2_Tuple_2_IPane__Object__Boolean_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$Boolean_Boolean = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$ChildProcess_ChildProcess_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_IPane_IEnumerator_1_IPane_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_Object_IEnumerator_1_Object_ = (function(option)
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
Option__Iterate$Object_Object_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Object_Object_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$String_1String = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$String_1String(inp);
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
Process__fromPath$ = (function(name)
{
    if (Process__isWin$()) 
    {
      return name;
    }
    else
    {
      var path = (((window.atom).config).get("ionide-fsharp.MonoPath"));
      return ((path + "/") + name);
    };
});
Process__getCwd$ = (function(unitVar0)
{
    try
    {
      var t = (((window.atom).project).getPaths())[0];
      if ((fs.existsSync(t))) 
      {
        return t;
      }
      else
      {
        return null;
      };
    }
    catch(matchValue){
      return null;
    };
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__spawn$ = (function(location,linuxCmd,cmd)
{
    var _229;
    if ((cmd == "")) 
    {
      _229 = [];
    }
    else
    {
      _229 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _229;
    var cwd = Process__getCwd$();
    var _452;
    try
    {
      _452 = (new Options___ctor$(cwd));
    }
    catch(matchValue){
      _452 = (new Options___ctor$(null));
    };
    var options = _452;
    var _457;
    if (Process__isWin$()) 
    {
      _457 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      _457 = (child_process.spawn(linuxCmd, prms, options));
    };
    var procs = _457;
    return procs;
});
Replacements__utf8Encoding$ = (function(unitVar0)
{
    return (new UTF8Encoding___ctor$());
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
SendSnippetKind__File = (function()
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "File";
});
SendSnippetKind__Line = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Line";
});
SendSnippetKind__Selection = (function()
{
    var __this = this;
    __this.Tag = 2.000000;
    __this._CaseName = "Selection";
});
Seq__Collect$IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,xs)
{
    return Seq__Concat$IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(Seq__Map$IPane__IEnumerable_1_Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object_(f, xs));
});
Seq__Collect$Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,xs)
{
    return Seq__Concat$IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(Seq__Map$Object__IEnumerable_1_Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object_(f, xs));
});
Seq__Concat$IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(xs)
{
    return Seq__Delay$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var _enum = Seq__Enumerator$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_(xs);
      var tryGetNext = (function(innerEnum)
      {
        var _innerEnum = {contents: innerEnum};
        var output = {contents: {Tag: 0.000000}};
        var hasFinished = {contents: false};
        while ((!hasFinished.contents))
        {
          var matchValue = _innerEnum.contents;
          if ((matchValue.Tag == 1.000000)) 
          {
            var currentEnum = Option__GetValue$IEnumerator_1_Tuple_2_IPane__Object_IEnumerator_1_Tuple_2_IPane__Object_(matchValue);
            if (currentEnum.MoveNext()) 
            {
              output.contents = {Tag: 1.000000, Value: currentEnum.get_Current()};
              null;
              hasFinished.contents = true;
              null;
            }
            else
            {
              _innerEnum.contents = {Tag: 0.000000};
              null;
            };
          }
          else
          {
            if (_enum.MoveNext()) 
            {
              _innerEnum.contents = {Tag: 1.000000, Value: Seq__Enumerator$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(_enum.get_Current())};
              null;
            }
            else
            {
              hasFinished.contents = true;
              null;
            };
          };
        };
        var _matchValue = (new TupleFSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_(_innerEnum.contents, output.contents));
        if ((_matchValue.Items[0.000000].Tag == 1.000000)) 
        {
          if ((_matchValue.Items[1.000000].Tag == 1.000000)) 
          {
            var e = Option__GetValue$IEnumerator_1_Tuple_2_IPane__Object_IEnumerator_1_Tuple_2_IPane__Object_(_matchValue.Items[0.000000]);
            var x = Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(_matchValue.Items[1.000000]);
            return {Tag: 1.000000, Value: (new TupleTuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_(x, {Tag: 1.000000, Value: e}))};
          }
          else
          {
            return {Tag: 0.000000};
          };
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
      return Seq__Unfold$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(x)
      {
        return tryGetNext(x);
      }), {Tag: 0.000000});
    }));
});
Seq__Delay$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_ = (function(f)
{
    return Seq__FromFactory$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var _2450;
      return Seq__Enumerator$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_(f(_2450));
    }));
});
Seq__Delay$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(f)
{
    return Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var _2597;
      return Seq__Enumerator$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(f(_2597));
    }));
});
Seq__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function()
{
    return Seq__Unfold$Boolean__Tuple_2_IPane__Object_Boolean_Tuple_2_IPane__Object_((function(_arg1)
    {
      return {Tag: 0.000000};
    }), false);
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$HtmlKeyValue_HtmlKeyValue_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$IPane_IPane_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Object_Object_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String_1String = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Exists$HtmlKeyValue_HtmlKeyValue_ = (function(f,xs)
{
    return Seq__ExistsAux$HtmlKeyValue_HtmlKeyValue_(f, Seq__Enumerator$HtmlKeyValue_HtmlKeyValue_(xs));
});
Seq__ExistsAux$HtmlKeyValue_HtmlKeyValue_ = (function(f,xs)
{
    return (xs.MoveNext() && (f(xs.get_Current()) || Seq__ExistsAux$HtmlKeyValue_HtmlKeyValue_(f, xs)));
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
Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_((function(_arg1)
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
Seq__Fold$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_((function(_arg1)
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
Seq__FoldIndexed$String_1_FSharpList_1_String_String_FSharpList_1_String_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String_1_Unit_String_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String_1Unit__String(f, seed, Seq__Enumerator$String_1String(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexed$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(f, seed, Seq__Enumerator$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(xs));
});
Seq__FoldIndexedAux$FSharpList_1_String__String_1FSharpList_1_String__String = (function(f,acc,xs)
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
Seq__FoldIndexedAux$FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpList_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,acc,xs)
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
Seq__FoldIndexedAux$Unit__String_1Unit__String = (function(f,acc,xs)
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
        var _108;
        return __.factory(_108);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$HtmlKeyValue_HtmlKeyValue_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_HtmlKeyValue___ctor$HtmlKeyValue_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _3933;
        return __.factory(_3933);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerable_1_Tuple_2_IPane__Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2442;
        return __.factory(_2442);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$IPane_IPane_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_IPane___ctor$IPane_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2672;
        return __.factory(_2672);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Object_Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Object___ctor$Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2362;
        return __.factory(_2362);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String_1String = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String___ctor$String(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2969;
        return __.factory(_2969);
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
        var _341;
        return __.factory(_341);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Tuple_2_IPane__Object___ctor$Tuple_2_IPane__Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _2223;
        return __.factory(_2223);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Disposable_Disposable_ = (function(f,xs)
{
    var _116;
    return Seq__Fold$Disposable__Unit_Disposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _116, xs);
});
Seq__IterateIndexed$String_1String = (function(f,xs)
{
    var _4215;
    return Seq__FoldIndexed$String_1_Unit_String_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _4215, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _361;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _361, xs);
});
Seq__Map$IPane__IEnumerable_1_Tuple_2_IPane__Object_IPane__IEnumerable_1_Tuple_2_IPane__Object_ = (function(f,xs)
{
    return Seq__Delay$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$IPane_IPane_(xs));
    }));
});
Seq__Map$Object__IEnumerable_1_Tuple_2_IPane__Object_Object__IEnumerable_1_Tuple_2_IPane__Object_ = (function(f,xs)
{
    return Seq__Delay$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$Object_Object_(xs));
    }));
});
Seq__OfArray$HtmlKeyValue_HtmlKeyValue_ = (function(xs)
{
    return Seq__Unfold$Int32__HtmlKeyValue_Int32_HtmlKeyValue_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleHtmlKeyValue__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$IPane_IPane_ = (function(xs)
{
    return Seq__Unfold$Int32__IPane_Int32_IPane_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleIPane__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$Object_Object_ = (function(xs)
{
    return Seq__Unfold$Int32__Object_Int32_Object_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleObject__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$String_1String = (function(xs)
{
    return Seq__Unfold$Int32__String_1Int32_String((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString_Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
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
Seq__OfList$String___String___ = (function(xs)
{
    return Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$String___String___(_arg1);
        var x = List__Head$String___String___(_arg1);
        return {Tag: 1.000000, Value: (new TupleString____FSharpList_1_String___(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__Singleton$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(x)
{
    return Seq__Unfold$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_((function(_arg1)
    {
      if ((_arg1.Tag == 0.000000)) 
      {
        return {Tag: 0.000000};
      }
      else
      {
        var _x = Option__GetValue$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(_arg1);
        return {Tag: 1.000000, Value: (new TupleTuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_(_x, {Tag: 0.000000}))};
      };
    }), {Tag: 1.000000, Value: x});
});
Seq__ToArray$String_1String = (function(xs)
{
    var ys = Array__ZeroCreate$String_1String(0);
    Seq__IterateIndexed$String_1String((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
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
Seq__ToList$String_1String = (function(xs)
{
    return List__Reverse$String_1String(Seq__Fold$String_1_FSharpList_1_String_String_FSharpList_1_String_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$String_1String(x, acc);
      });
    }), List__Empty$String_1String(), xs));
});
Seq__ToList$Tuple_2_IPane__Object_Tuple_2_IPane__Object_ = (function(xs)
{
    return List__Reverse$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(Seq__Fold$Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_Tuple_2_IPane__Object__FSharpList_1_Tuple_2_IPane__Object_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(x, acc);
      });
    }), List__Empty$Tuple_2_IPane__Object_Tuple_2_IPane__Object_(), xs));
});
Seq__Unfold$Boolean__Tuple_2_IPane__Object_Boolean_Tuple_2_IPane__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Boolean__Tuple_2_IPane__Object___ctor$Boolean_Tuple_2_IPane__Object_(seed, f));
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
            var currAcc = Option__GetValue$Boolean_Boolean(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__Boolean_Tuple_2_Tuple_2_IPane__Object__Boolean_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__Boolean_Tuple_2_Tuple_2_IPane__Object__Boolean_(x).Items[1.000000];
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
          return (Option__IsSome$Boolean_Boolean(__.acc) && (function()
          {
            var _2267;
            return next(_2267);
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
Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___(seed, f));
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
            var currAcc = Option__GetValue$FSharpList_1_String___FSharpList_1_String___(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[1.000000];
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
          return (Option__IsSome$FSharpList_1_String___FSharpList_1_String___(__.acc) && (function()
          {
            var _545;
            return next(_545);
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
Seq__Unfold$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(seed, f));
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
            var currAcc = Option__GetValue$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_(x).Items[1.000000];
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
          return (Option__IsSome$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_(__.acc) && (function()
          {
            var _2574;
            return next(_2574);
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
Seq__Unfold$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Tuple_2_IPane__Object_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_(seed, f));
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
            var currAcc = Option__GetValue$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_Tuple_2_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_(x).Items[1.000000];
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
          return (Option__IsSome$FSharpOption_1_Tuple_2_IPane__Object_FSharpOption_1_Tuple_2_IPane__Object_(__.acc) && (function()
          {
            var _2201;
            return next(_2201);
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
Seq__Unfold$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_ = (function(f,seed)
{
    return Seq__FromFactory$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_(seed, f));
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
            var currAcc = Option__GetValue$IEnumerator_1_IPane_IEnumerator_1_IPane_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_(x).Items[1.000000];
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
          return (Option__IsSome$IEnumerator_1_IPane_IEnumerator_1_IPane_(__.acc) && (function()
          {
            var _2730;
            return next(_2730);
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
Seq__Unfold$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_ = (function(f,seed)
{
    return Seq__FromFactory$IEnumerable_1_Tuple_2_IPane__Object_IEnumerable_1_Tuple_2_IPane__Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_(seed, f));
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
            var currAcc = Option__GetValue$IEnumerator_1_Object_IEnumerator_1_Object_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_Tuple_2_IEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_(x).Items[1.000000];
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
          return (Option__IsSome$IEnumerator_1_Object_IEnumerator_1_Object_(__.acc) && (function()
          {
            var _2420;
            return next(_2420);
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
            var _86;
            return next(_86);
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
Seq__Unfold$Int32__HtmlKeyValue_Int32_HtmlKeyValue_ = (function(f,seed)
{
    return Seq__FromFactory$HtmlKeyValue_HtmlKeyValue_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__HtmlKeyValue___ctor$Int32_HtmlKeyValue_(seed, f));
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
              var value = Option__GetValue$Tuple_2_HtmlKeyValue__Int32_Tuple_2_HtmlKeyValue__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_HtmlKeyValue__Int32_Tuple_2_HtmlKeyValue__Int32_(x).Items[1.000000];
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
            var _3911;
            return next(_3911);
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
Seq__Unfold$Int32__IPane_Int32_IPane_ = (function(f,seed)
{
    return Seq__FromFactory$IPane_IPane_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__IPane___ctor$Int32_IPane_(seed, f));
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
              var value = Option__GetValue$Tuple_2_IPane__Int32_Tuple_2_IPane__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_IPane__Int32_Tuple_2_IPane__Int32_(x).Items[1.000000];
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
            var _2650;
            return next(_2650);
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
Seq__Unfold$Int32__Object_Int32_Object_ = (function(f,seed)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Object___ctor$Int32_Object_(seed, f));
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
              var value = Option__GetValue$Tuple_2_Object__Int32_Tuple_2_Object__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Object__Int32_Tuple_2_Object__Int32_(x).Items[1.000000];
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
            var _2340;
            return next(_2340);
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
Seq__Unfold$Int32__String_1Int32_String = (function(f,seed)
{
    return Seq__FromFactory$String_1String((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String___ctor$Int32_String(seed, f));
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
              var value = Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String__Int32_Tuple_2_String__Int32_(x).Items[1.000000];
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
            var _2947;
            return next(_2947);
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
            var _319;
            return next(_319);
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
Stream__Write$ = (function(__,buffer,offset,count)
{
    var extra = Array__GetSubArray$Byte_Byte(buffer, offset, count);
    __.contents = Array__Append$Byte_Byte(__.contents, extra);
});
Stream___ctor$ = (function(initalContents,flush)
{
    var __this = this;
    {};
    __this.flush = flush;
    __this.contents = initalContents;
    __this.nextIndex = 0;
});
Stream__get_Contents$ = (function(__,unitVar1)
{
    return __.contents;
});
String__EndsWith$ = (function(s,search)
{
    var offset = (s.length - search.length);
    var index = s.indexOf(search, offset);
    return ((index != -1) && (index == offset));
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
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
TimeSpan__get_TicksPerMillisecond$ = (function(unitVar0)
{
    return 10000.000000;
});
TupleDisposable__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleFSharpFunc_2_Unit__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_ = (function(Item0,Item1,Item2)
{
    var __this = this;
    __this.Items = [Item0, Item1, Item2];
});
TupleFSharpFunc_2_WebResponse__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_ = (function(Item0,Item1,Item2)
{
    var __this = this;
    __this.Items = [Item0, Item1, Item2];
});
TupleFSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleHtmlKeyValue__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_IPane_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleIEnumerable_1_Tuple_2_IPane__Object__IEnumerator_1_Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleIPane__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleIPane__Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleObject__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____FSharpList_1_String___ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleTuple_2_IPane__Object__FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleTuple_2_IPane__Object__FSharpOption_1_Tuple_2_IPane__Object_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UTF8Encoding__GetBytes$ = (function(__,text)
{
    var str = text;
    var byteArray = [];
    for (var i = 0; i < str.length; i++)
        if (str.charCodeAt(i) <= 0x7F)
            byteArray.push(str.charCodeAt(i));
        else {
            var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
            for (var j = 0; j < h.length; j++)
                byteArray.push(parseInt(h[j], 16));
        }
    return byteArray;;
});
UTF8Encoding__GetString$ = (function(__,bytes)
{
    var byteArray = bytes;
    var str = '';
    for (var i = 0; i < byteArray.length; i++)
        str +=  byteArray[i] <= 0x7F?
                byteArray[i] === 0x25 ? "%25" : // %
                String.fromCharCode(byteArray[i]) :
                "%" + byteArray[i].toString(16).toUpperCase();
    return decodeURIComponent(str);;
});
UTF8Encoding___ctor$ = (function(unitVar0)
{
    {};
});
UnfoldEnumerator_2_Boolean__Tuple_2_IPane__Object___ctor$Boolean_Tuple_2_IPane__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_IEnumerator_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object___ctor$FSharpOption_1_Tuple_2_IPane__Object__Tuple_2_IPane__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_IPane__IEnumerable_1_Tuple_2_IPane__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object___ctor$IEnumerator_1_Object__IEnumerable_1_Tuple_2_IPane__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
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
UnfoldEnumerator_2_Int32__HtmlKeyValue___ctor$Int32_HtmlKeyValue_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__IPane___ctor$Int32_IPane_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Object___ctor$Int32_Object_ = (function(seed,unfold)
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
UnfoldEnumerator_2_Int32__String___ctor$Int32_String = (function(seed,unfold)
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
    return ((((editor != undefined) && (editor["getGrammar"] != undefined)) && ((editor.getGrammar()) != undefined)) && (((editor.getGrammar()).name).indexOf("fsharp") >= 0));
});
ViewsHelpers__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
WebHeaderCollection__Add$ = (function(__,key,value)
{
    __.headers = List__CreateCons$Tuple_2_String__String_Tuple_2_String__String_((new TupleString_String(key, value)), __.headers);
});
WebHeaderCollection___ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.headers = List__Empty$Tuple_2_String__String_Tuple_2_String__String_();
});
WebHeaderCollection__get_Keys$ = (function(__,unitVar1)
{
    return List__ToArray$String_1String(List__Map$Tuple_2_String__String__String_1Tuple_2_String__String__String((function(tuple)
    {
      return tuple.Items[0.000000];
    }), __.headers));
});
WebHeaderCollection__get_Values$ = (function(__,unitVar1)
{
    return List__ToArray$String_1String(List__Map$Tuple_2_String__String__String_1Tuple_2_String__String__String((function(tuple)
    {
      return tuple.Items[1.000000];
    }), __.headers));
});
WebRequest__AsyncGetResponse$ = (function(req,unitVar1)
{
    return Async_1_FromContinuations$WebResponse_WebResponse_((function(tupledArg)
    {
      var onSuccess = tupledArg.Items[0.000000];
      var onError = tupledArg.Items[1.000000];
      var _arg1 = tupledArg.Items[2.000000];
      var matchValue = _arg1;
      var onReceived = (function(data)
      {
        var bytes = UTF8Encoding__GetBytes$(Replacements__utf8Encoding$(), data);
        return onSuccess((new WebResponse___ctor$(bytes)));
      });
      var onErrorReceived = (function(unitVar0)
      {
        return onError(null);
      });
      var _971;
      if ((WebRequest__get_Method$(req) == "GET")) 
      {
        _971 = null;
      }
      else
      {
        _971 = UTF8Encoding__GetString$(Replacements__utf8Encoding$(), Stream__get_Contents$(req.requestStream));
      };
      var body = _971;
      return Web__sendRequest$Unit_Unit_(WebRequest__get_Method$(req), req.url, WebHeaderCollection__get_Keys$(WebRequest__get_Headers$(req)), WebHeaderCollection__get_Values$(WebRequest__get_Headers$(req)), body, onReceived, onErrorReceived);
    }));
});
WebRequest__Create$ = (function(uri)
{
    return (new WebRequest___ctor$(uri));
});
WebRequest__GetRequestStream$ = (function(__,unitVar1)
{
    return __.requestStream;
});
WebRequest___ctor$ = (function(url)
{
    var __this = this;
    {};
    __this.url = url;
    __this.requestStream = (new Stream___ctor$([], (function(value)
    {
      var ignored0 = value;
    })));
    __this.Url_ = __this.url;
    __this.Headers_ = (new WebHeaderCollection___ctor$());
    __this.Method_ = "GET";
});
WebRequest__get_Headers$ = (function(__,unitVar1)
{
    return __.Headers_;
});
WebRequest__get_Method$ = (function(__,unitVar1)
{
    return __.Method_;
});
WebRequest__set_Method$ = (function(__,v)
{
    __.Method_ = v;
});
WebResponse__GetResponseStream$ = (function(__,unitVar1)
{
    return (new Stream___ctor$(__.contents, (function(value)
    {
      var ignored0 = value;
    })));
});
WebResponse___ctor$ = (function(contents)
{
    var __this = this;
    {};
    __this.contents = contents;
});
Web__sendRequest$Unit_Unit_ = (function(meth,url,headerKeys,headerValues,body,onSuccess,onError)
{
    
    var _method = meth, 
        _url = url, 
        _headerKeys = headerKeys, 
        _headerValues = headerValues,
        _body = body, 
        _onSuccess = onSuccess, 
        _onError = onError;

    if (window.XDomainRequest) {
        var req = new XDomainRequest();
        req.onload = function() { _onSuccess(req.responseText); };
        req.onerror = _onError;
        req.ontimeout = _onError;
        req.timeout = 10000;
        req.open(_method, _url);
        if(_body) {
            req.send(_body);
        } else {
            req.send();
        }
    }
    else {
        var req;

        if (window.XMLHttpRequest)
          req = new XMLHttpRequest();
        else
          req = new ActiveXObject("Microsoft.XMLHTTP");

        req.onreadystatechange = function () {
            if(req.readyState == 4) {
                if(req.status == 200 || req.status == 204) {
                    _onSuccess(req.responseText);
                }
                else {
                    _onError();
                }
            }
        };
        req.open(_method, _url, true);
        for(var i = 0; i < _headerKeys.length; i++) {
            var key = _headerKeys[i];
            var value = _headerValues[i];
            req.setRequestHeader(key, value);
        }
        if(_body) {
            req.send(_body);
        } else {
            req.send();
        }
    };
});
list_1_String__ConsString = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String__NilString = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_String____ConsString___ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String____NilString___ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Tuple_2_IPane__Object__ConsTuple_2_IPane__Object_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Tuple_2_IPane__Object__NilTuple_2_IPane__Object_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_Tuple_2_String__String__ConsTuple_2_String__String_ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Tuple_2_String__String__NilTuple_2_String__String_ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
InteractiveServer__service = InteractiveServer__get_service$();
Logger__active = Logger__get_active$();
Logger__logPath = Logger__get_logPath$();
Logger__editor = Logger__get_editor$();
Logger__subscriptions = Logger__get_subscriptions$();
InteractiveServer__port = InteractiveServer__get_port$();
Logger__fullLog = Logger__get_fullLog$();
Fsi_1_iframeBody = Fsi_1_get_iframeBody$();
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