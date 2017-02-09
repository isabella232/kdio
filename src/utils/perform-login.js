import { actions } from 'modules/session'
import setSessionToken from 'utils/set-session-token'
import getNickname from 'utils/get-nickname'

// ==============================================================================
// Performing login:
// ==============================================================================
// - A dispatch handler decorator for logging users in.
// - Uses login action of SessionModule (src/modules/session).
// - Really bare bones implementation without a proper error handling.
//
// FIXME(umut): proper error handling
// ==============================================================================
const performLogin = function(dispatch) {
  return function(username, password) {
    return dispatch(actions.login(username, password))
    .then(function(result) {
      return result.payload.clientId
    })
    .then(function(token) {
      setSessionToken(token)
      return location.replace("/" + (getNickname()))
    })
  }
}

export default performLogin
