import CoreLayout from 'components/CoreLayout'

import LogoutRoute from './Logout'
import LoginRoute from './Login'
import UserProfileRoute from './UserProfile'
import UserTemplateRoute from './UserTemplate'
import UserSettingsRoute from './UserSettings'

import ensureSessionAccount from 'utils/ensure-session-account'

// TODO(umut): Add 404 handling here.
const IndexRedirect = (store) => ({
  onEnter(nextState, replace, done) {
    return ensureSessionAccount(store)
      .then(account => {
        replace(`/${account.profile.nickname}`)
        done()
      })
  }
})

const AuthenticatedRootRoute = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: IndexRedirect(store),
  childRoutes: [
    LoginRoute(store),
    LogoutRoute(store),
    UserSettingsRoute(store),
    UserProfileRoute(store),
    UserTemplateRoute(store),
  ]
})

export default AuthenticatedRootRoute
