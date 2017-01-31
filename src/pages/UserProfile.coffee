import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { select as userSelectors } from 'modules/user'
import { select as templateSelectors } from 'modules/stack-template'
import { mapValues } from 'lodash'

import ProfileCard from 'components/ProfileCard'
import TemplateList from 'components/TemplateList'

mapStateToProps = (state, props) ->

  templates = []
  isAuthUser = no

  account = userSelectors.byNickname(props.params.nickname)(state)

  if account
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
)(TemplateList)

export Header = connect(
  mapStateToProps
  mapDispatchToProps
)(ProfileCard)
