import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'
import { select as sessionSelectors } from 'modules/session'

export byId = (id) ->
  bongoSelectors.one 'JAccount', accountId

export whoami = createSelector(
  bongoSelectors.all('JAccount')
  sessionSelectors.accountId
  (accounts, accountId) -> accounts?[accountId]
)

export templates = (accountId) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.originId is accountId

export credentials = (accountId) ->
  bongoSelectors.some 'JCredential', (c) -> c.originId is accountId
