import { actions as bongoActions } from 'modules/bongo'
import { select as userSelectors } from 'modules/user'
import {
  actions as sessionActions,
  select as sessionSelectors
} from 'modules/session'

bongoLoad = (instance) ->
  instance.constructorName = 'JAccount'
  return {
    type: bongoActions.ONE
    payload: instance
  }

export default ensureSessionAccount = (store) ->
  if account = userSelectors.whoami(store.getState())
    return Promise.resolve account

  store.dispatch(sessionActions.whoami())
    .then (res) -> store.dispatch bongoLoad res.payload[0]
    .then ({ payload: account }) -> account
