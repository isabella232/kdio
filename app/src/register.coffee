kd = require 'kd.js'
$ = require 'jquery'

module.exports = class Register extends kd.View

  viewAppended: ->

    @addSubView form = new kd.FormView

    form.addSubView label = new kd.LabelView
      title : 'Username:'

    form.addSubView input = new kd.InputView
      label   : label
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView label2 = new kd.LabelView
      title : 'Email:'

    form.addSubView input2 = new kd.InputView
      label   : label2
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView label1 = new kd.LabelView
      title : 'Password:'

    form.addSubView input1 = new kd.InputView
      label   : label1
      type    : 'password'
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView button = new kd.ButtonView
      title: 'Login'
      callback: ->
        alert "Hello #{input.getValue()}"
        console.log $
        # req
