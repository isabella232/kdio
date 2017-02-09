import immutable from './immutable'
import getSessionToken from './get-session-token'

const getInitialState = function() {
  return immutable({
    session: {
      token: getSessionToken()
    }
  })
}

export default getInitialState
