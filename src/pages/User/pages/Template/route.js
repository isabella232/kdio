import AppLayout from 'components/AppLayout'
import UserTemplatePage, { Header } from './container'
import ensureSessionAccount from 'utils/ensure-session-account'
import { actions as bongoActions } from 'modules/bongo'

import { loadByNickname } from 'modules/user/actions'
import { loadByOriginId } from 'modules/stack-template/actions'

const IndexRoute = (store) => ({
  component: {
    header: Header,
    main: UserTemplatePage
  },
  onEnter(nextState) {
    const { dispatch } = store
    const { session: { token } } = store.getState()
    const { nickname, slug } = nextState.params

    const promise = token ? ensureSessionAccount(store) : Promise.resolve()

    return promise
      .then(() => dispatch(loadByNickname(nickname)))
      .then(({ payload: [account] }) => dispatch(loadByOriginId(account._id, { slug })))
      .catch(console.error.bind(null, 'fetch err'))
  }
})

const UserTemplateRoute = (store) => ({
  path: '/:nickname/:slug',
  component: AppLayout,
  indexRoute: IndexRoute(store)
})

export default UserTemplateRoute
