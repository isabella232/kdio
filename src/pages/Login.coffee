import { connect } from 'react-redux'
import { actions } from 'modules/session'
import { replace } from 'react-router-redux'
import getConfig from 'utils/get-config'
import setSessionToken from 'utils/set-session-token'

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
    .then (token) -> setSessionToken token
    .then -> replace getConfig('dashbord-route')


mapDispatchToProps = (dispatch) ->
  return {
    onSubmit: performLogin(dispatch)
  }

export default LoginPage = connect(null, mapDispatchToProps)(Login)
