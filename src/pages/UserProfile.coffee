import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { browserHistory } from 'react-router'
import { select as userSelectors } from 'modules/user'
import { select as templateSelectors } from 'modules/stack-template'
import { mapValues } from 'lodash'

import UserProfile from 'components/UserProfile'

mapStateToProps = (state, props) ->

  account = userSelectors.byNickname(props.params.nickname)(state)

  templates = userSelectors.templates(account._id)(state)
  templates = mapValues templates, (t) ->
    templateSelectors.decorate(t)(state)

  whoami = userSelectors.whoami(state)

  isAuthUser = if whoami and account
  then whoami._id is account._id
  else no

  return { account, templates, isAuthUser }

mapDispatchToProps = (dispatch) ->
  return {
    onTemplateClick: (template) ->
      browserHistory.push "/#{template.owner.profile.nickname}/#{template.id}"
  }

export default UserProfilePage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserProfile)
