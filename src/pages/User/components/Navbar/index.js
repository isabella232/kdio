import { connect } from 'react-redux'
import { getAuthUser } from 'modules/auth-user'

import Navbar from './Navbar'

const mapStateToProps = (state) => ({
  account: getAuthUser(state)
})

export default connect(
  mapStateToProps
)(Navbar)
