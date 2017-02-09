import { actions as bongoActions } from 'modules/bongo'
import { select as userSelectors } from 'modules/user'
import { actions as sessionActions } from 'modules/session'

const bongoLoad = function(instance) {
  instance.constructorName = 'JAccount'
  return {
    type: bongoActions.ONE,
    payload: instance
  }
}

const ensureSessionAccount = function(store) {
  const account = userSelectors.whoami(store.getState())
  if (account) {
    return Promise.resolve(account)
  }
  return store.dispatch(sessionActions.whoami())
    .then(res => store.dispatch(bongoLoad(res.payload[0])))
    .then(({ payload as account }) => account)
}

export default ensureSessionAccount
