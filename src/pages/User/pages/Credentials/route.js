import AppLayout from 'components/AppLayout'
import UserCredentialsPage, { Header } from './container'
import ensureSessionAccount from 'utils/ensure-session-account'

import { loadByNickname, loadCredentials } from 'modules/user/actions'

const IndexRoute = (store) => ({
  components: {
    header: Header,
    main: UserCredentialsPage
  },
  onEnter(nextState) {

    const { dispatch } = store

    return ensureSessionAccount(store)
      .then(() => dispatch(loadByNickname(nextState.params.nickname)))
      .then(({ payload: [account] }) => dispatch(loadCredentials(account._id)))
      .catch(console.error.bind(null, 'fetch err'))
  }
})

const UserCredentialsRoute = (store) => ({
  path: '/:nickname/credentials',
  component: AppLayout,
  indexRoute: IndexRoute(store)
})

export default UserCredentialsRoute
