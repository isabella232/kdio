import { combineReducers, applyMiddleware } from 'redux'
import { mergeWith, mapValues, map } from 'lodash'

registerReduxModules = (modules, params) ->

  modules = assign {}, modules
  params = assign {}, params

  modules = mergeWith modules, params, registerModule

  # each module exposes a reducer, we combine them to create one single
  # reducer to rule them all!!
  reducers = mapValues modules, (module) -> module.getReducer()
  reducer = combineReducers reducers

  # apply middlewares of individual modules if they expose one.
  middlewares = map(modules, pickMiddleware).filter Boolean
  middleware = applyMiddleware middlewares...

  return { reducer, middleware }


registerModule = (module, options) -> module.register(options)

pickMiddleware = (module) -> module.getMiddleware()


export default registerReduxModules
