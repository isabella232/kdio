import { connect } from 'react-redux'
import { actions } from 'modules/session'
import performLogin from 'utils/perform-login'

import Signup from 'components/Signup'

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email, username, password) {
    return dispatch(actions.signup(email, username, password))
      .then(() => performLogin(dispatch)(username, password))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Signup)
