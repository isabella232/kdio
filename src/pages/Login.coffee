import { connect } from 'react-redux'
import performLogin from 'utils/perform-login'

import Login from 'components/Login'

mapDispatchToProps = (dispatch) ->
  return {
    onSubmit: performLogin(dispatch)
  }

export default LoginPage = connect(null, mapDispatchToProps)(Login)
