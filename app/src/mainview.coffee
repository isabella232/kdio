kd = require 'kd.js'
sections = require './sections'
renderMarkdown  = require './renderMarkdown'


module.exports = class MainView extends kd.View

  constructor: (options = {}, data) ->
    options.cssClass = 'main-view'

    super options, data

    @scrolls = {}

    @addSubView @tabView = new kd.TabView
      cssClass             : 'main-tabview'
      maxHandleWidth       : 220
      hideHandleCloseIcons : yes

    @generatePages()

    @currentPage = 'welcome'
    @emit 'ready'


  open: (page, options) -> @ready =>

    @scrolls[@currentPage] = document.body.scrollTop

    @tabView.showPane view = sections[page].view
    document.body.scrollTop = @scrolls[page] ? 0

    if page is 'user'
      @tabView.tabHandleContainer.hide()
    else
      @tabView.tabHandleContainer.show()

    view.mainView.setOptions options  if options
    @currentPage = page


  generatePages: ->

    (Object.keys sections).forEach (page) =>
      return  if /^__/.test page
      _     = sections[page]
      name  = _.title ? page
      content = renderMarkdown _.content ? ''
      route = _.route ? "/#{page}"
      _.view = new kd.TabPaneView
        name          : name
        lazy          : yes
        view          : new (_.viewClass ? kd.View)(
          _.options ? { partial : content }
        )

      _.view.tabHandle = new kd.TabHandleView
        title       : name
        tagName     : 'a'
        hidden      : !!_.hidden
        attributes  :
          href      : route
        mousedown   : (event) ->
          kd.utils.stopDOMEvent event
          return no

      @tabView.addPane _.view


  show: ->
    super
    document.body.scrollTop = @_lastScroll ? 0


  hide: ->
    @_lastScroll = document.body.scrollTop
    super
