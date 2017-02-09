import { actions as bongoActions } from 'modules/bongo'
import { fetchToken, login as doLogin, signup as doSignup } from './requests'

export const LOGIN = 'session/LOGIN'
export const SIGNUP = 'session/SIGNUP'
export const WHOAMI = 'session/WHOAMI'

export const whoami = () => {
  return {
    type: WHOAMI,
    payload: bongoActions.requestStatic('JUser', 'whoami')
  }
}

export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: fetchToken().then(() => {
      return doLogin(username, password)
    })
  }
}

export const signup = (email, username, password) => {
  return {
    type: SIGNUP,
    payload: fetchToken().then((res) => {
      return doSignup(email, username, password, res ? res.token : null)
    })
  }
}
