{$, $$$, ScrollView} = require 'atom-space-pen-views'

module.exports =
class FsiView extends ScrollView
  @content: ->
      @div class: 'native-key-bindings', tabindex: -1

  constructor: (@editorId) ->
    super

  getTitle: ->
      "F# Interactive"

  attached: ->
    @html $$$ ->
      @div class: 'fsi'
