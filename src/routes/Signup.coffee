import SignupPage from 'pages/Signup'
import getNickname from 'utils/get-nickname'

export default Signup = (store) ->
  path: '/signup'
  onEnter: (nextState, replace) ->
    replace "/#{nick}"  if nick = getNickname()
  component: SignupPage
