import immutable from 'utils/immutable'

export const LOGIN = 'auth/LOGIN'
export const SIGNUP = 'auth/SIGNUP'

const initialState = immutable({
  clientId: null,
  username: null,
})

// this is only gonna get updated in page load with preloading.
export const reducer = (state = initialState, action) => {
  return state
}

// actions

export const login = (username, password) => ({
  type: LOGIN,
  api: {
    endpoint: '/auth/login',
    method: 'post',
    data: { username, password }
  }
})

export const signup = (email, username, password) => ({
  type: SIGNUP,
  api: {
    endpoint: '/auth/signup',
    method: 'post',
    data: { email, username, signup }
  }
})

// selectors

export const getUsername = (state) => state.auth.username

export const getClientId = (state) => state.auth.clientId
