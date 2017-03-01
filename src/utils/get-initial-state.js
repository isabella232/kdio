import immutable from './immutable'
import Cookies from 'js-cookie'

const getInitialState = function() {
  return immutable({
    auth: {
      clientId: Cookies.get('clientId') || null,
      username: Cookies.get('username') || null,
    }
  })
}

export default getInitialState
