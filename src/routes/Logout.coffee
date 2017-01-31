import Cookies from 'js-cookie'

export default LogoutRoute = (store) ->
  path: 'logout'
  onEnter: ->
    Cookies.remove 'clientId'
    Cookies.remove '_csrf'
    Cookies.remove 'username'
    location.replace '/'
