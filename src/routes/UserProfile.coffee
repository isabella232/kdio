import AppLayout from 'components/AppLayout'
import UserProfilePage, { Header } from 'pages/UserProfile'
import ensureSessionAccount from 'utils/ensure-session-account'

import { loadByNickname, loadTemplates } from 'modules/user/actions'

export default UserProfileRoute = (store) ->
  path: '/:nickname'
  component: AppLayout
  indexRoute: IndexRoute(store)

IndexRoute = (store) ->
  components:
    header: Header
    main: UserProfilePage
  onEnter: (nextState) ->
    { dispatch } = store
    { session: { token } } = store.getState()

    promise = if token
    then ensureSessionAccount(store)
    else Promise.resolve()

    promise
      .then -> dispatch loadByNickname(nextState.params.nickname)
      .then ({ payload: [account] }) -> dispatch loadTemplates(account._id)
      .catch console.error.bind(null, 'fetch err')
