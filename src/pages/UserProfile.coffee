import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { browserHistory } from 'react-router'
import { select as userSelectors } from 'modules/user'
import { select as templateSelectors } from 'modules/stack-template'
import { mapValues } from 'lodash'

import UserProfile from 'components/UserProfile'

# TODO(umut): fix this for every user and read the account with ownProps.location
mapStateToProps = (state, ownProps) ->

  account = userSelectors.whoami(state)
  templates = userSelectors.templates(account._id)(state)
  templates = mapValues templates, (t) ->
    templateSelectors.decorate(t)(state)

  whoami = userSelectors.whoami(state)

  return { account, templates, isAuthUser: whoami._id is account._id }

mapDispatchToProps = (dispatch) ->
  return {
    onTemplateClick: (template) ->
      browserHistory.push "/#{template.owner.profile.nickname}/#{template.id}"
  }

export default UserProfilePage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserProfile)
