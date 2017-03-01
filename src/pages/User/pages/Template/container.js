import { connect } from 'react-redux'
import UserTemplate from './components/Template'

import ensureSessionAccount from 'utils/ensure-session-account'
import connectPage from 'utils/connect-page'

import { getAuthUser } from 'modules/auth-user'

import {
  fetchUserTemplate,
  fetchUserProfile,
  getUserProfile
} from 'modules/user'

import {
  templateBySlug,
  decorateTemplate
} from 'modules/template'

const mapStateToProps = (state, props) => {

  const { username, slug } = props.params

  const template = templateBySlug(slug)(state)

  return {
    nickname: username,
    template: template && decorateTemplate(state, template),
  }
}

const onPageLoad = (props, { dispatch, getState }) => {

  const { template } = props

  if (template) {
    return
  }

  const { username, slug } = props.params

  const promise = getAuthUser(getState())
    ? ensureSessionAccount({ dispatch, getState })
    : Promise.resolve()

  return Promise.all([
    promise,
    dispatch(fetchUserProfile(username)),
    dispatch(fetchUserTemplate(username, slug)),
  ])
}

const ConnectedTemplate = connectPage({
  onPageLoad
})(UserTemplate)

export default connect(
  mapStateToProps
)(ConnectedTemplate)

