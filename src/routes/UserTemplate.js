import AppLayout from 'components/AppLayout'
import UserTemplatePage, { Header } from 'pages/UserTemplate'
import ensureSessionAccount from 'utils/ensure-session-account'

import { loadByNickname, loadTemplates } from 'modules/user/actions'

const IndexRoute = (store) => ({
  component: {
    header: Header,
    main: UserTemplatePage
  },
  onEnter(nextState) {
    const { dispatch } = store
    return ensureSessionAccount(store)
      .then(() => dispatch(loadByNickname(nextState.params.nickname)))
      .then(({ payload: [account] }) => dispatch(loadTemplates(account._id)))
  }
})

const UserTemplateRoute = (store) => ({
  path: '/:nickname/:templateId',
  component: AppLayout,
  indexRoute: IndexRoute(store)
})

export default UserTemplateRoute
