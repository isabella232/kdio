kd = require 'kd.js'
sections = require './sections'

router = null

module.exports = getRouter = ->

  return router  if router

  router = new kd.Router

  (Object.keys sections).forEach (page) ->
    router.addRoute "/#{page}", ->
      kd.singletons.mainview.open page

  router.handleNotFound = (path) ->
    if path in sections.__users
      kd.singletons.mainview.open 'user', {user: path}
    else
      @handleRoute '/'

  router.addRoute '', (options, stack, path) ->
    if path is '/'
      kd.singletons.mainview.open 'welcome'

  { pathname, search, hash } = location
  router.handleRoute "#{pathname}#{search}#{hash}", shouldPushState: no
  router.listen()

  return router
