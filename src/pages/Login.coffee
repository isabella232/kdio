import { connect } from 'react-redux'
import { actions } from 'modules/session'
import getConfig from 'utils/get-config'
import setSessionToken from 'utils/set-session-token'
import getNickname from 'utils/get-nickname'

import Login from 'components/Login'

# ==============================================================================
# Performing login:
# ==============================================================================
# - A dispatch handler decorator for logging users in.
# - Uses login action of SessionModule (src/modules/session).
# - Really bare bones implementation without a proper error handling.
#
# FIXME(umut): proper error handling
# ==============================================================================
performLogin = (dispatch) -> (username, password) ->
  dispatch(actions.login username, password)
    .then (result) -> result.payload.clientId
    .then (token) ->
      setSessionToken token
      location.replace "/#{getNickname()}"


mapDispatchToProps = (dispatch) ->
  return {
    onSubmit: performLogin(dispatch)
  }

export default LoginPage = connect(null, mapDispatchToProps)(Login)
