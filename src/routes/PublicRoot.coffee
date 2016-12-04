import CenteredLayout from 'components/CenteredLayout'

import LoginRoute from './Login'

export default PublicRootRoute = (store) ->
  return {
    path: '/'
    component: CenteredLayout
    indexRoute:
      onEnter: (nextState, replace) -> replace '/login'
    childRoutes: [
      LoginRoute(store)
    ]
  }


