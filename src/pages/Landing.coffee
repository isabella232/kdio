import { connect } from 'react-redux'

import Landing from 'components/Landing'

mapState = (state) ->
  return {
    helpVisible: state.landingPage.helpVisible
  }

export default connect(
  mapState
)(Landing)
