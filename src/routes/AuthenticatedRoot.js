import CoreLayout from 'components/CoreLayout'

import LogoutRoute from './Logout'
import LoginRoute from 'pages/Home/pages/Login/route'
import UserProfileRoute from 'pages/User/pages/Profile/route'
import UserTemplateRoute from 'pages/User/pages/Template/route'
import UserSettingsRoute from 'pages/User/pages/Settings/route'
import UserCredentialsRoute from 'pages/User/pages/Credentials/route'

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
    UserCredentialsRoute(store),
    UserProfileRoute(store),
    UserTemplateRoute(store),
  ]
})

export default AuthenticatedRootRoute
