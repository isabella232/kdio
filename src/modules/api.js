import immutable from 'utils/immutable'

export const reducer = (state = immutable({}), action) => {

  const { result, error, meta = {} } = action

  if (error || !meta.constructorName) {
    return state
  }

  const { constructorName: name } = meta

  const models = Array.isArray(result) ? result : [result]

  return models.reduce((state, model) => {
    // ensure we have a collection before updating.
    state = state[name] ? state : state.set(name, immutable({}))

    return state.update(name, col => col.set(model._id, immutable(model)))
  }, state)
}
