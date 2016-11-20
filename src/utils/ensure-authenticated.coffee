import { UserAuthWrapper } from 'redux-auth-wrapper'
import { replace } from 'react-router-redux'
import { isFunction, assign } from 'lodash'

export UserIsAuthenticated = UserAuthWrapper
  authSelector: (state) -> state.session.user
  redirectAction: replace
  wrapperDisplayName: 'Authenticated'

export default ensureAuthenticated = (route) ->
  switch
    when isFunction(route) then UserIsAuthenticated(route)
    when isFunction(route.getComponent) then ensureAsync(route)
    when route.component then ensureSync(route)
    else route


ensureAsync = (route) ->
  console.error 'Not yet implemented'
  return route

ensureSync = (route) ->
  assign route, { component: UserIsAuthenticated(route.component) }
