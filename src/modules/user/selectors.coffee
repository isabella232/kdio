import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'
import { select as sessionSelectors } from 'modules/session'

export byId = (id) ->
  bongoSelectors.one 'JAccount', accountId

export byNickname = (nickname) ->
  createSelector(
    bongoSelectors.all 'JAccount'
    (accounts = {}) ->
      filtered = Object.keys(accounts).filter (id) ->
        accounts[id].profile.nickname is nickname
      if filtered[0] then accounts[filtered[0]] else null
  )

export whoami = createSelector(
  bongoSelectors.all('JAccount')
  sessionSelectors.accountId
  (accounts, accountId) -> accounts?[accountId]
)

export templates = (accountId) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.originId is accountId

export credentials = (accountId) ->
  bongoSelectors.some 'JCredential', (c) -> c.originId is accountId
