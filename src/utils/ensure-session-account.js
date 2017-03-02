import { fetchAuthUser, getAuthUser } from 'modules/auth-user'

const ensureSessionAccount = (store) => {
  const account = getAuthUser(store.getState())

  return account
    ? Promise.resolve(account)
    : store.dispatch(fetchAuthUser())
}

export default ensureSessionAccount
