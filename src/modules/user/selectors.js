import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'
import { select as sessionSelectors } from 'modules/session'

export const byId = (id) =>
  bongoSelectors.one('JAccount', accountId)

export const byNickname = (nickname) =>
  createSelector(
    bongoSelectors.all('JAccount'),
    (accounts = {}) => {
      const filtered = Object.keys(accounts)
        .filter(id => accounts[id].profile.nickname === nickname)

      return filtered[0] ? accounts[filtered[0]] : null
    }
  )

export const whoami = createSelector(
  bongoSelectors.all('JAccount'),
  sessionSelectors.accountId,
  (accounts, accountId) => accounts && accounts[accountId]
)

export const templates = (accountId) =>
  bongoSelectors.some('JStackTemplate', (t) => t.originId === accountId)

export const credentials = (accountId) =>
  bongoSelectors.some('JCredential', (c) => c.originId === accountId)
