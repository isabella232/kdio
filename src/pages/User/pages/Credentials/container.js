import { connect } from 'react-redux'
import { mapValues } from 'lodash'

import { select as userSelectors } from 'modules/user'
import {
  select as credentialSelectors,
  actions as credentialActions
} from 'modules/credential'

import Credentials, { Header } from './components/Credentials'

const mapState = (state, props) => {

  let credentials = []

  const account = userSelectors.byNickname(props.params.nickname)(state)

  if (account) {
    credentials = userSelectors.credentials(account._id)(state)
    credentials = mapValues(credentials, c => credentialSelectors.decorate(c)(state))
  }

  console.log({ credentials })

  return { account, credentials }
}

const mapDispatch = (dispatch) => ({
  onCredentialClick(credential) {
    console.log(`credential clicked ${credential.id}`)
  }
})

export default connect(
  mapState,
  mapDispatch
)(Credentials)

export { Header }
