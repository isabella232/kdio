import AppLayout from 'pages/User/components/Layout'
import UserProfilePage, { Header } from './container'
import ensureSessionAccount from 'utils/ensure-session-account'

import { loadByNickname } from 'modules/user/actions'
import { loadByOriginId } from 'modules/stack-template/actions'

const IndexRoute = (store) => ({

  components: {
    header: Header,
    main: UserProfilePage,
  },

  onEnter(nextState) {

    const { dispatch } = store
    const { session: { token } } = store.getState()

    const promise = token ? ensureSessionAccount(store) : Promise.resolve()

    return promise
      .then(() => dispatch(loadByNickname(nextState.params.nickname)))
      .then(({ payload: [account] }) => dispatch(loadByOriginId(account._id)))
      .catch(console.error.bind(null, 'fetch err'))
  }

})

const UserProfileRoute = (store) => ({
  path: '/:nickname',
  component: AppLayout,
  indexRoute: IndexRoute(store),
})

export default UserProfileRoute
