import LoginPage from 'pages/Login'
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
