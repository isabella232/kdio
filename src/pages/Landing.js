import { connect } from 'react-redux'

import Landing from 'components/Landing'

const mapState = (state) => ({
  helpVisible: state.landingPage.helpVisible
})

export default connect(
  mapState
)(Landing)
