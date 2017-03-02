import LoginPage from './container'
import { getUsername } from 'modules/auth'

const LoginRoute = (store) => ({
  path: '/login',
  component: LoginPage,
  onEnter(nextState, replace) {
    const username = getUsername(store.getState())
    if (username) {
      replace(`/${username}`)
    }
  }
})

export default LoginRoute
