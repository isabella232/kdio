import CoreLayout from 'components/CoreLayout'

import LoginRoute from './Login'
import DashboardRoute from './Dashboard'
import UserProfileRoute from './UserProfile'
import KomponentsRoute from './Komponents'

import getSessionToken from 'utils/get-session-token'

IndexRedirect =
  path: '/'
  onEnter: (nextState, replace) ->
    if getSessionToken()
    then replace '/dashboard'
    else replace '/login'

export default RootRoute = (store) ->
  return {
    component: CoreLayout
    childRoutes: [
      IndexRedirect
      LoginRoute(store)
      DashboardRoute(store)

      KomponentsRoute(store)
    ]
  }

