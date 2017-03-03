import immutable from 'utils/immutable'

export const reducer = (state = immutable({}), action) => {

  const { result, error, meta = {} } = action

  if (error) {
    return state
  }

  if (meta.constructorNames) {
    return handleMultiple(state, result, meta.constructorNames)
  }

  if (meta.constructorName) {
    return handleSingle(state, result, meta.constructorName)
  }

  return state
}

const handleMultiple = (state, result, names) => {
  Object.keys(names).forEach(key => {
    const name = names[key]
    const res = result[key]

    state = handleSingle(state, result, name)
  })

  return state
}

const handleSingle = (state, result, name) => {
  const models = Array.isArray(result) ? result : [result]
  return models.reduce((state, model) => {
    // ensure we have a collection before updating.
    state = state[name] ? state : state.set(name, immutable({}))
    return state.update(name, col => col.set(model._id, immutable(model)))
  }, state)
}
