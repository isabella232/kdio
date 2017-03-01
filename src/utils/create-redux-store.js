import { createStore, combineReducers, applyMiddleware } from 'redux'

import { routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'

import createApiMiddleware from 'utils/create-api-middleware'
import createPromiseMiddleware from 'utils/create-promise-middleware'

import { reducer as apiReducer } from 'modules/api'
import { reducer as authReducer } from 'modules/auth'

const createReduxStore = (options) => {

  const { state: initialState } = options

  const reducers = {
    api: apiReducer,
    auth: authReducer,
    routing: routerReducer,
  }

  const rootReducer = combineReducers(reducers)

  const middlewares = [
    createApiMiddleware(),
    createPromiseMiddleware(),
    createLogger()
  ]

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
}

export default createReduxStore
