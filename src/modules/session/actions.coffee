import { actions as bongoActions } from 'modules/bongo'
import { fetchToken, login as doLogin, signup as doSignup } from './requests'

export LOGIN = 'session/LOGIN'
export SIGNUP = 'session/SIGNUP'
export WHOAMI = 'session/WHOAMI'

export whoami = ->
  return {
    type: WHOAMI
    payload: bongoActions.requestStatic 'JUser', 'whoami'
  }

export login = (username, password) ->
  return {
    type: LOGIN
    payload: fetchToken().then -> doLogin(username, password)
  }


export signup = (email, username, password) ->
  return {
    type: SIGNUP
    payload: fetchToken().then (res) -> doSignup(email, username, password, res?.token)
  }
