import AppLayout from 'components/AppLayout'
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
  path: '/:nickname/settings',
  component: AppLayout,
  indexRoute: IndexRoute(store),
})

export default UserSettingsRoute
