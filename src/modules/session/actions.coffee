import { actions as bongoActions } from 'modules/bongo'
import { fetchToken, login as doLogin } from './requests'

export LOGIN = 'session/LOGIN'
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

