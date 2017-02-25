import CoreLayout from 'components/CoreLayout'
import ParticlesLayout from 'components/ParticlesLayout'

import LandingRoute from 'pages/Home/pages/Landing/route'
import LoginRoute from 'pages/Home/pages/Login/route'
import SignupRoute from 'pages/Home/pages/Signup/route'

import UserProfileRoute from 'pages/User/pages/Profile/route'
import UserTemplateRoute from 'pages/User/pages/Template/route'

const PublicRootRoute = (store) => ({
  childRoutes: [
    {
      component: ParticlesLayout,
      childRoutes: [
        LandingRoute(store),
        SignupRoute(store),
        LoginRoute(store),
      ]
    },
    {
      component: CoreLayout,
      childRoutes: [
        UserProfileRoute(store),
        UserTemplateRoute(store)
      ]
    }
  ]
})

export default PublicRootRoute
