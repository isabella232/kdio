kd = require 'kd.js'

module.exports = class User extends kd.View

  viewAppended: ->

    @addSubView new kd.CustomHTMLView
      partial: "Hello #{@getOption 'user'}"
