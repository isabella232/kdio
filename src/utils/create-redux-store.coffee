import {
  createStore, combineReducers, applyMiddleware
} from 'redux'

import { routerReducer } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'

import { reducer as bongoReducer } from 'modules/bongo'
import { reducer as sessionReducer } from 'modules/session'
import { reducer as landingPageReducer } from 'modules/landing-page'

export default createReduxStore = (options) ->

  { state: initialState } = options

  middlewares = [
    promiseMiddleware
    createLogger()
  ]

  reducers =
    routing: routerReducer
    session: sessionReducer
    bongo: bongoReducer
    landingPage: landingPageReducer

  rootReducer = combineReducers(reducers)

  return createStore(rootReducer, initialState, applyMiddleware middlewares...)
