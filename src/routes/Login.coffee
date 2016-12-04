import LoginPage from 'pages/Login'
import getNickname from 'utils/get-nickname'

export default LoginRoute = (store) ->
  path: '/login'
  onEnter: (nextState, replace) ->
    replace "/#{nick}"  if nick = getNickname()
  component: LoginPage
