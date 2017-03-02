import { connect } from 'react-redux'

import ensureSessionAccount from 'utils/ensure-session-account'
import connectPage from 'utils/connect-page'
import { getAuthUser, updateSettings } from 'modules/auth-user'

import Settings from './components/Settings'

const mapState = (state, props) => ({
  account: getAuthUser(state)
})

const mapDispatch = (dispatch, props) => ({
  onSubmit(account, values) {
    const body = {
      'profile.firstName': values.firstName,
      'profile.lastName': values.lastName
    }

    const { nickname } = account.profile

    dispatch(updateSettings(username, body))
  }
})

const ConnectedSettings = connectPage({
  onPageLoad(props, store) {
    return ensureSessionAccount(store)
  }
})(Settings)

export default connect(
  mapState,
  mapDispatch
)(ConnectedSettings)

