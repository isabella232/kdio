import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { map } from 'lodash'

import slugify from 'utils/slugify'
import connectPage from 'utils/connect-page'
import ensureSessionAccount from 'utils/ensure-session-account'

import { getAuthUser } from 'modules/auth-user'
import { decorateTemplate } from 'modules/template'
import {
  getUserProfile,
  getUserTemplates,
  fetchUserProfile,
  fetchUserTemplates
} from 'modules/user'

import UserProfile from './components/UserProfile'

const mapStateToProps = (state, props) => {

  const { username } = props.params
  let templates = []
  let isAuthUser = false

  const account = getUserProfile(username)(state)

  if (account) {

    const me = getAuthUser(state)

    templates = getUserTemplates(username)(state)
    templates = templates.map(t => decorateTemplate(state, t))

    isAuthUser = me && account ? me._id === account._id : false
  }

  return { account, templates, isAuthUser }
}

const mapDispatchToProps = (dispatch) => ({
  onTemplateClick(account, template) {
    browserHistory.push(`/${account.profile.nickname}/${slugify(template.title)}`)
  }
})

const onPageLoad = (props, { dispatch, getState }) => {

  const { username } = props.params

  const promise = getAuthUser(getState())
    ? ensureSessionAccount({ dispatch, getState })
    : Promise.resolve()

  return Promise.all([
    promise,
    dispatch(fetchUserProfile(username)),
    dispatch(fetchUserTemplates(username)),
  ])
}

const ConnectedProfile = connectPage({
  onPageLoad
})(UserProfile)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedProfile)

