import { connect } from 'react-redux'
import { select as userSelectors } from 'modules/user'
import Navbar from './Navbar'

const mapStateToProps = (state, props) => ({
  account: userSelectors.whoami(state)
})

export default connect(
  mapStateToProps
)(Navbar)
