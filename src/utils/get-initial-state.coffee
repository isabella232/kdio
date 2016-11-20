import immutable from './immutable'
import getSessionToken from './get-session-token'

export default getInitialState = ->
  immutable
    session:
      token: getSessionToken()

