kd = require 'kd.js'
$ = require 'jquery'
Promise = require 'bluebird'
Cookies = require 'js-cookie'

module.exports = class Login extends kd.View

  sayMyName = (username) -> new Promise (resolve, reject) ->

    resolve 'gokmen'
    return

    $.ajax
      url         : 'http://localhost:8090/-/api/remote/jaccount.one'
      data        : { 'profile.nickname': username }
      type        : 'POST'
      xhrFields   : { withCredentials : yes }
      success     : (data) ->
        resolve data.data.data
      error       : ({ responseText }) ->
        reject arguments

  doLogin = (username, password) -> new Promise (resolve, reject) ->

    groupName = 'koding'

    if Cookies.get 'clientId'
      resolve()
      return

    $.ajax
      url         : 'http://localhost:8090/Login'
      data        : { username, password }
      type        : 'POST'
      xhrFields   : { withCredentials : yes }
      success     : (data) ->
        { clientId } = data
        Cookies.set 'clientId', clientId
        resolve()
      error       : ->
        reject arguments

  setCsrf = -> new Promise (resolve, reject) ->

    if Cookies.get '_csrf'
      resolve()
      return

    $.ajax
      url         : 'http://localhost:8090/-/teams/allow'
      type        : 'POST'
      xhrFields   : { withCredentials : yes }
      success     : (data) ->
        {token: _csrf} = data
        Cookies.set '_csrf', _csrf
        resolve()
      error       : ->
        reject arguments


  buildLoggedInView: ->

    @destroySubViews()

    @addSubView button = new kd.ButtonView
      title: 'Logout'
      callback: =>
        Cookies.remove '_csrf'
        Cookies.remove 'clientId'
        Cookies.remove 'username'
        @buildLoggedOutView()

    sayMyName Cookies.get 'username'
      .then (account) -> console.log ">>> your jaccount", account


  buildLoggedOutView: ->

    @destroySubViews()

    @addSubView new kd.CustomHTMLView
      partial: 'Hello'

    @addSubView form = new kd.FormView

    form.addSubView label = new kd.LabelView
      title : 'Username:'

    form.addSubView @usernameInput = new kd.InputView
      label   : label
      defaultValue: 'gokmen'
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView passwordLabel = new kd.LabelView
      title : 'Password:'

    form.addSubView passwordInput = new kd.InputView
      label   : passwordLabel
      type    : 'password'
      defaultValue: '123123123'
      keydown : (event) ->
        button.click()  if event.which is 13

    form.addSubView button = new kd.ButtonView
      title: 'Login'
      callback: =>

        username = @usernameInput.getValue()
        password = passwordInput.getValue()

        Promise.join setCsrf(), doLogin(username, password), =>
          Cookies.set 'username', username
          @buildLoggedInView()


  viewAppended: ->

    unless Cookies.get 'clientId'

      @buildLoggedOutView()

    else

      @buildLoggedInView()