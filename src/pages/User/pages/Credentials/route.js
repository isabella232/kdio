import AppLayout from 'pages/User/components/Layout'
import UserCredentialsPage from './container'

const UserCredentialsRoute = (store) => ({
  path: '/:username/credentials',
  component: AppLayout,
  indexRoute: {
    component: UserCredentialsPage
  }
})

export default UserCredentialsRoute
