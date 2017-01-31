
export default createRoutes = (store, roots) ->

  { session: { token } } = store.getState()

  if token
  then roots.authenticated(store)
  else roots.public(store)

