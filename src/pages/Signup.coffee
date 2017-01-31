import { connect } from 'react-redux'
import { actions } from 'modules/session'
import performLogin from 'utils/perform-login'

import Signup from 'components/Signup'

mapDispatchToProps = (dispatch) ->
  return {
    onSubmit: (email, username, password) ->
      dispatch(actions.signup email, username, password)
        .then ->
          console.log 'foo'
          performLogin(dispatch)(username, password)
  }

export default SignupPage = connect(null, mapDispatchToProps)(Signup)
