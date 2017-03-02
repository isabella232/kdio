import { getClientId } from 'modules/auth'

const createRoutes = (store, roots) =>
  getClientId(store.getState())
    ? roots.authenticated(store)
    : roots.public(store)

export default createRoutes
