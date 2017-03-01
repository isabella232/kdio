import { connect } from 'react-redux'
import { mapValues } from 'lodash'

import ensureSessionAccount from 'utils/ensure-session-account'
import connectPage from 'utils/connect-page'

import { getAuthUser } from 'modules/auth-user'
import { decorateCredential } from 'modules/credential'
import {
  getUserProfile,
  getUserCredentials,
  fetchUserProfile,
  fetchUserCredentials
} from 'modules/user'

import Credentials from './components/Credentials'

const mapState = (state, props) => {

  const { username } = props.params
  let credentials = []

  const account = getUserProfile(username)(state)

  if (account) {
    credentials = getUserCredentials(username)(state)
    credentials = credentials.map(c => decorateCredential(state, c))
  }

  return { account, credentials }
}

const mapDispatch = (dispatch) => ({
  onCredentialClick(credential) {
    console.log(`credential clicked ${credential.id}`)
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
    dispatch(fetchUserCredentials(username)),
  ])
}

const ConnectedCredentials = connectPage({
  onPageLoad
})(Credentials)

export default connect(
  mapState,
  mapDispatch
)(ConnectedCredentials)
