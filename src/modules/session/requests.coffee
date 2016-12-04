import $ from 'jquery'
import Cookies from 'js-cookie'
import getConfig from 'utils/get-config'

fetchToken = -> new Promise (resolve, reject) ->

  if Cookies.get '_csrf'
    return resolve()

  { kodingUrl } = getConfig()

  $.ajax
    url: "#{kodingUrl}/-/teams/allow"
    type: 'POST'
    success: (result) ->
      Cookies.set '_csrf', result.token
      resolve()
    error: reject

login = (username, password, groupName = getConfig().groupName) -> new Promise (resolve, reject) ->

  { kodingUrl } = getConfig()
  data = { username, password, groupName, _csrf: Cookies.get '_csrf' }

  $.ajax
    url: "#{kodingUrl}/Login"
    type: 'POST'
    data: data
    xhrFields:
      withCredentials: yes
    success: (result) ->
      Cookies.set 'username', username
      resolve result
    error: reject

module.exports = { fetchToken, login }

