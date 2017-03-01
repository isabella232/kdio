import UserPageLayout from 'pages/User/components/Layout'
import UserSettingsPage, { Header } from './container'
import ensureSessionAccount from 'utils/ensure-session-account'

const IndexRoute = (store) => ({
  components: {
    header: Header,
    main: UserSettingsPage
  },
  onEnter() {
    return ensureSessionAccount(store)
  }
})

const UserSettingsRoute = (store) => ({
  path: '/:username/settings',
  component: UserPageLayout,
  indexRoute: {
    component: UserSettingsPage
  }
})

export default UserSettingsRoute
