import { connect } from 'react-redux'
import { signup } from 'modules/auth'

import Signup from './components/Signup'

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email, username, password) {
    dispatch(signup(email, username, password))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Signup)
