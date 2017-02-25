import LoginPage from './container'
import getNickname from 'utils/get-nickname'

const LoginRoute = (store) => ({
  path: '/login',
  component: LoginPage,
  onEnter(nextState, replace) {
    if (getNickname()) {
      replace(`/${getNickname()}`)
    }
  }
})

export default LoginRoute
