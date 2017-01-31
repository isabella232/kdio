import { ONE, SOME, UPDATE, MODIFY } from './actions'
import { pickBy } from 'lodash'
import immutable from 'utils/immutable'

# selectors for reading data from bongo reducer.
export select =
  one: (name, id) -> (state) -> state.bongo[name]?[id]
  all: (name) -> (state) -> state.bongo[name]
  some: (name, predicate) -> (state) -> pickBy state.bongo[name], predicate

# default export is a reducer.
export default reducer = (state = immutable({}), action) ->

  # we don't deal with actions with error.
  return state  if action.error

  { payload, type } = action

  switch type
    # cache once a change occurs, and notify listeners.
    when ONE, SOME, UPDATE then storeModels(state, payload)

    # we don't deal with other actions.
    else state


storeModels = (state, payload) ->

  models = if Array.isArray(payload) then payload else [payload]

  return models.reduce (state, model) ->
    { _id, constructorName } = model
    ensureCollection(state, constructorName).update constructorName, (collection) ->
      collection.set _id, immutable(model)
  , state

ensureCollection = (state, name) ->

  if state[name] then state else state.set name, immutable({})
