import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'

export const owner = (credentialId) => (
  createSelector(
    bongoSelectors.all('JAccount'),
    bongoSelectors.one('JCredential', credentialId),
    (accounts, credential) => (credential && accounts[credential.originId])
  )
)

export const decorate = (credential) => (state) => ({
  id: credential._id,
  title: credential.title,
  provider: credential.provider,
  accessLevel: credential.accessLevel,
  owner: owner(credential._id)(state),
  _data: credential
})
