import AppLayout from 'components/AppLayout'
import UserSettingsPage, { Header } from 'pages/UserSettings'
import ensureSessionAccount from 'utils/ensure-session-account'


export default UserSettingsRoute = (store) ->
  path: '/:nickname/settings'
  component: AppLayout
  indexRoute: IndexRoute(store)

IndexRoute = (store) ->
  components:
    header: Header
    main: UserSettingsPage
  onEnter: ->
    ensureSessionAccount(store)
