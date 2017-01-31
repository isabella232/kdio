import { actions } from 'modules/session'
import setSessionToken from 'utils/set-session-token'
import getNickname from 'utils/get-nickname'

# ==============================================================================
# Performing login:
# ==============================================================================
# - A dispatch handler decorator for logging users in.
# - Uses login action of SessionModule (src/modules/session).
# - Really bare bones implementation without a proper error handling.
#
# FIXME(umut): proper error handling
# ==============================================================================
export default performLogin = (dispatch) -> (username, password) ->
  dispatch(actions.login username, password)
    .then (result) -> result.payload.clientId
    .then (token) ->
      setSessionToken token
      location.replace "/#{getNickname()}"

