import CoreLayout from 'components/CoreLayout'

import LogoutRoute from './Logout'
import LoginRoute from './Login'
import UserProfileRoute from './UserProfile'
import KomponentsRoute from './Komponents'

import ensureSessionAccount from 'utils/ensure-session-account'
import { select as userSelectors } from 'modules/user'

# TODO(umut): Add 404 handling here.
IndexRedirect = (store) ->
  onEnter: (nextState, replace, done) ->
    ensureSessionAccount(store).then (account) ->
      replace "/#{account.profile.nickname}"
      done()

export default AuthenticatedRootRoute = (store) ->
  return {
    path: '/'
    component: CoreLayout
    indexRoute: IndexRedirect(store)
    childRoutes: [
      KomponentsRoute(store)
      LoginRoute(store)
      LogoutRoute(store)
      UserProfileRoute(store)
    ]
  }

