import UserLayout from 'pages/User/components/Layout'
import UserProfilePage from './container'

const UserProfileRoute = (store) => ({
  path: '/:username',
  component: UserLayout,
  indexRoute: {
    component: UserProfilePage
  }
})

export default UserProfileRoute
