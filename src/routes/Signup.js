import SignupPage from 'pages/Signup'
import getNickname from 'utils/get-nickname'

const SignupRoute = (store) => ({
  path: '/signup',
  component: SignupPage,
  onEnter(nextState, replace) {
    if (getNickname()) {
      replace(`/${getNickname()}`)
    }
  }
})

export default SignupRoute
