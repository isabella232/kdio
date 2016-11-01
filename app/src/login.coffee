kd = require 'kd.js'
$ = require 'jquery'

module.exports = class Login extends kd.View

  viewAppended: ->

    @addSubView new kd.CustomHTMLView
      partial: 'Hello'

    @addSubView form = new kd.FormView

    form.addSubView label = new kd.LabelView
      title : 'Username:'

    form.addSubView username = new kd.InputView
      label   : label
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView passwordLabel = new kd.LabelView
      title : 'Password:'

    form.addSubView password = new kd.InputView
      label   : passwordLabel
      type    : 'password'
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView button = new kd.ButtonView
      title: 'Login'
      callback: ->
        alert "Hello #{username.getValue()}"
        location.replace "/#{username.getValue()}"
        # req
