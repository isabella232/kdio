const createRoutes = (cookies, store, roots) => (
  cookies.token ? roots.authenticated(store) : roots.public(store)
)

export default createRoutes
