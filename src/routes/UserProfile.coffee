import AppLayout from 'components/AppLayout'
import UserProfilePage from 'pages/UserProfile'
import ensureSessionAccount from 'utils/ensure-session-account'

import UserTemplateRoute from './UserTemplate'

import { loadByNickname, loadTemplates } from 'modules/user/actions'

export default UserProfileRoute = (store) ->
  return {
    path: ':username'
    component: AppLayout
    indexRoute: IndexRoute(store)
    childRoutes: [
      UserTemplateRoute(store)
    ]
  }

IndexRoute = (store) ->
  { dispatch } = store
  return {
    component: UserProfilePage
    onEnter: (nextState, replace, done) ->
      ensureSessionAccount(store)
        .then -> dispatch loadByNickname(nextState.params.username)
        .then ({ payload: [account] }) -> dispatch loadTemplates(account._id)
        .then ({ payload: templates }) -> done()
        .catch (err) -> done(err) # TODO(umut): Proper error handling.
  }
