kd = require 'kd.js'
MainView = require './mainview'

do ->

  kd.registerSingleton 'mainview', mainView = new MainView
  kd.registerSingleton 'router',   (require './router')()

  mainView.appendToDomBody()

