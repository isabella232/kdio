import { actions } from 'modules/session'
import Cookies from 'js-cookie'

// ==============================================================================
// Performing login:
// ==============================================================================
// - A dispatch handler decorator for logging users in.
// - Uses login action of SessionModule (src/modules/session).
// - Really bare bones implementation without a proper error handling.
//
// FIXME(umut): proper error handling
// ==============================================================================
const performLogin = (dispatch) => (username, password) => {
  return dispatch(actions.login(username, password))
    .then(({ payload: [result] }) => {
      Cookies.set('username', username)
      Cookies.set('clientId', result.token)
      return location.replace(`/${username}`)
    })
}

export default performLogin
