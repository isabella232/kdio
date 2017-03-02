import { find, filter } from 'lodash'
import { createSelector } from 'reselect'

const FETCH_USER_PROFILE = 'user/FETCH_USER_PROFILE'
const FETCH_USER_TEMPLATES = 'user/FETCH_USER_TEMPLATES'
const FETCH_USER_TEMPLATE = 'user/FETCH_USER_TEMPLATE'
const FETCH_USER_CREDENTIALS = 'user/FETCH_USER_CREDENTIALS'

export const fetchUserProfile = (username) => ({
  type: FETCH_USER_PROFILE,
  meta: {
    constructorName: 'JAccount',
  },
  api: {
    endpoint: `/users/${username}`,
    method: 'get'
  }
})

export const fetchUserTemplates = (username) => ({
  type: FETCH_USER_TEMPLATES,
  meta: {
    constructorName: 'JStackTemplate',
  },
  api: {
    endpoint: `/users/${username}/templates`,
    method: 'get'
  }
})

export const fetchUserTemplate = (username, slug) => ({
  type: FETCH_USER_TEMPLATE,
  meta: {
    constructorName: 'JStackTemplate',
  },
  api: {
    endpoint: `/users/${username}/templates/${slug}`,
    method: 'get'
  }
})

export const fetchUserCredentials = (username) => ({
  type: FETCH_USER_CREDENTIALS,
  meta: {
    constructorName: 'JCredential',
  },
  api: {
    endpoint: `/users/${username}/credentials`,
    method: 'get'
  }
})

export const getUserProfile = (username) =>
  createSelector(
    (state) => state.api.JAccount,
    (accounts) => find(accounts, acc => acc.profile.nickname === username)
  )

export const getUserTemplates = (username) =>
  createSelector(
    getUserProfile(username),
    (state) => state.api.JStackTemplate,
    (acc, templates) => filter(templates, { originId: acc._id })
  )

export const getUserCredentials = (username) =>
  createSelector(
    getUserProfile(username),
    (state) => state.api.JCredential,
    (acc, credentials) => filter(credentials, { originId: acc._id })
  )
