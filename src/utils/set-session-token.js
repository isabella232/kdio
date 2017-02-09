import Cookies from 'js-cookie'

const setSessionToken = function(token) {
  return Cookies.set('clientId', token)
}

export default setSessionToken
