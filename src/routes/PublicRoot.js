import CoreLayout from 'components/CoreLayout'
import ParticlesLayout from 'components/ParticlesLayout'

import LandingRoute from 'pages/Home/pages/Landing/route'
import LoginRoute from 'pages/Home/pages/Login/route'
import SignupRoute from 'pages/Home/pages/Signup/route'

import UserProfileRoute from 'pages/User/pages/Profile/route'

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
        UserProfileRoute(store)
      ]
    }
  ]
})

export default PublicRootRoute
