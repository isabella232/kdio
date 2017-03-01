import SignupPage from './container'
import { getUsername } from 'modules/auth'

const SignupRoute = (store) => ({
  path: '/signup',
  component: SignupPage,
  onEnter(nextState, replace) {
    const username = getUsername(store.getState())
    if (username) {
      replace(`/${username}`)
    }
  }
})

export default SignupRoute
