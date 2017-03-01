import { createSelector } from 'reselect'
import { getUsername } from './auth'
import { getUserProfile } from './user'

export const FETCH_AUTH_USER = 'auth-user/FETCH_AUTH_USER'
export const UPDATE_SETTINGS = 'auth-user/UPDATE_SETTINGS'

export const fetchAuthUser = () => ({
  type: FETCH_AUTH_USER,
  meta: {
    constructorName: 'JAccount',
  },
  api: {
    endpoint: '/auth/whoami',
    method: 'get'
  }
})

export const updateSettings = (username, { firstName, lastName }) => ({
  type: UPDATE_SETTINGS,
  meta: {
    constructorName: 'JAccount'
  },
  api: {
    endpoint: `/users/${username}`,
    method: 'post',
    body: {
      'profile.firstName': firstName,
      'profile.lastName': lastName
    }
  }
})


export const getAuthUser = (state) => {
  const username = getUsername(state)
  return getUserProfile(username)(state)
}
