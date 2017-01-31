import { connect } from 'react-redux'
import { select as userSelectors, actions as userActions } from 'modules/user'

import Settings from 'components/Settings'
import SettingsHeader from 'components/SettingsHeader'

mapState = (state, props) ->
  return {
    account: userSelectors.whoami(state)
  }


mapDispatch = (dispatch, props) ->

  return {
    onSubmit: (account, values) ->
      body =
        'profile.firstName': values.firstName
        'profile.lastName': values.lastName

      dispatch(userActions.modify account, body).then ->
        dispatch(userActions.loadByNickname account.profile.nickname)
  }

export default UserSettingsPage = connect(
  mapState
  mapDispatch
)(Settings)

export Header = connect(
  mapState
  mapDispatch
)(SettingsHeader)
