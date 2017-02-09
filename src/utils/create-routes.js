const createRoutes = function(store, roots) {
  const { token } = store.getState().session
  if (token) {
    return roots.authenticated(store)
  } else {
    return roots["public"](store)
  }
}

export default createRoutes
