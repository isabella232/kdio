import UserDashboardPage from 'pages/UserDashboard'
import AppLayout from 'components/AppLayout'

import { actions as bongoActions } from 'modules/bongo'
import { actions as sessionActions } from 'modules/session'

bongoLoad = (instance) ->
  instance.constructorName = 'JAccount'
  return {
    type: bongoActions.ONE
    payload: instance
  }

prepareDashboard = (store) ->
  store.dispatch(sessionActions.whoami())
    .then (res) -> store.dispatch bongoLoad res.payload[0]
    .then ({ payload: account }) -> [
        store.dispatch bongoActions.some 'JStackTemplate', [{}]
        store.dispatch bongoActions.some 'JCredential', [{}]
      ]
    .then (actions) -> Promise.all actions

export default DashboardRoute = (store) ->
  return {
    path: '/dashboard'
    component: AppLayout
    indexRoute:
      component: UserDashboardPage
      onEnter: (nextState, replace, done) ->
        prepareDashboard store
          .then -> done()
          .catch (err) -> done err
  }

