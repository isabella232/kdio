import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'

export owner = (credentialId) ->
  createSelector(
    bongoSelectors.all 'JAccount'
    bongoSelectors.one 'JCredential', credentialId
    (accounts, credential) -> accounts[credential?.originId]
  )

export decorate = (credential) -> (state) ->
  return {
    id: credential._id
    title: credential.title
    provider: credential.provider
    accessLevel: credential.accessLevel
    owner: owner(credential._id)(state)
    _data: credential
  }


