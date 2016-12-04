import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { browserHistory } from 'react-router'
import { select as userSelectors } from 'modules/user'
import { select as templateSelectors } from 'modules/stack-template'
import { mapValues } from 'lodash'

import UserDashboard from 'components/UserDashboard'

mapStateToProps = (state, ownProps) ->
  account = userSelectors.whoami(state)
  templates = userSelectors.templates(account._id)(state)
  templates = mapValues templates, (t) ->
    templateSelectors.decorate(t)(state)

  return { account, templates }

mapDispatchToProps = (dispatch) ->
  return {
    onTemplateClick: (template) ->
      browserHistory.push "/#{template.owner.profile.nickname}/#{template.id}"
  }

export default UserDashboardPage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserDashboard)
