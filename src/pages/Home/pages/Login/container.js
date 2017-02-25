import { connect } from 'react-redux'
import performLogin from 'utils/perform-login'

import Login from './components/Login'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: performLogin(dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
