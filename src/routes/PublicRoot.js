import CoreLayout from 'components/CoreLayout'
import ParticlesLayout from 'components/ParticlesLayout'

import LandingRoute from './Landing'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import UserProfileRoute from './UserProfile'

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
