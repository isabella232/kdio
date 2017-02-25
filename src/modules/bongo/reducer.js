import { ONE, SOME, UPDATE, MODIFY } from './actions'
import { pickBy } from 'lodash'
import immutable from 'utils/immutable'

export const select = {

  one(name, id) {
    return (state) => state.bongo[name] && state.bongo[name][id]
  },

  all(name) {
    return (state) => state.bongo[name]
  },

  some(name, predicate) {
    return (state) => pickBy(state.bongo[name], predicate)
  }
}

const ensureCollection = (state, name) => (
  state[name] ? state : state.set(name, immutable({}))
)

const storeModels = (state, payload) => {
  const models = Array.isArray(payload) ? payload : [payload]

  return models.reduce((state, model) => {
    const { _id, constructorName } = model

    return ensureCollection(state, constructorName)
      .update(constructorName, (collection) => {
        return collection.set(_id, immutable(model))
      })
  }, state)
}

const reducer = (state = immutable({}), action) => {

  if (action.error) {
    return state
  }

  const { payload, type } = action

  switch (type) {
    case ONE:
    case SOME:
    case UPDATE:
      return storeModels(state, payload)
    default:
      return state
  }
}

export default reducer
