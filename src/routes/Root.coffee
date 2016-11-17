import CoreLayout from 'components/CoreLayout'

import LoginRoute from './Login'
import DashboardRoute from './Dashboard'
import UserProfileRoute from './UserProfile'

import getSessionToken from 'utils/get-session-token'

IndexRedirect =
  path: '/'
  component: (props) -> 'Foo'
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
    ]
  }

