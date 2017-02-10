import { actions as bongoActions } from 'modules/bongo'
import { select as userSelectors } from 'modules/user'
import { actions as sessionActions } from 'modules/session'

const bongoLoad = (instance) => {
  instance.constructorName = 'JAccount'
  return {
    type: bongoActions.ONE,
    payload: instance
  }
}

const ensureSessionAccount = (store) => {
  const account = userSelectors.whoami(store.getState())
  if (account) {
    return Promise.resolve(account)
  }
  return store.dispatch(sessionActions.whoami())
    .then(res => store.dispatch(bongoLoad(res.payload[0])))
    .then(({ payload: account }) => account)
}

export default ensureSessionAccount
