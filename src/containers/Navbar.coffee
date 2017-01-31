import { connect } from 'react-redux'
import { select as userSelectors } from 'modules/user'

import Navbar from 'components/Navbar'

mapStateToProps = (state, props) ->

  account = userSelectors.whoami(state)

  return { account }


export default NavbarContainer = connect(
  mapStateToProps
)(Navbar)
