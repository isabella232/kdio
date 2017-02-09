import Cookies from 'js-cookie'

const getSessionToken = function() {
  return Cookies.get('clientId')
}

export default getSessionToken
