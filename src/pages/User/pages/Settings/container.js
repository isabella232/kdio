import { connect } from 'react-redux'
import { select as userSelectors, actions as userActions } from 'modules/user'

import Settings from './components/Settings'
import SettingsHeader from './components/Header'

const mapState = (state, props) => ({
  account: userSelectors.whoami(state)
})

const mapDispatch = (dispatch, props) => ({
  onSubmit(account, values) {
    const body = {
      'profile.firstName': values.firstName,
      'profile.lastName': values.lastName
    }

    return dispatch(userActions.modify(account, body)).then(
      () => dispatch(userActions.loadByNickname(account.profile.nickname))
    )
  }
})

export default connect(
  mapState,
  mapDispatch
)(Settings)

export { SettingsHeader as Header }
