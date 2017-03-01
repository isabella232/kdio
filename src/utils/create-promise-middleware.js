const createPromiseMiddleware = () => ({ dispatch }) => next => action => {

  const { promise, type, ...rest } = action

  if (!promise) {
    return next(action)
  }

  const [BEGIN, SUCCESS, FAIL] = expandType(type)

  const begin = () =>
    dispatch({ type: BEGIN })

  const success = (result) => {
    dispatch({ ...rest, result, type: SUCCESS})
    // so that it can be chained like:
    //   dispatch(...).then(result => {})
    return result
  }

  const fail = (error) => {
    dispatch({ ...rest, error, type: FAIL })
    return Promise.reject(error)
  }

  begin()
  return promise().then(success, fail)
}

const expandType = type => {
  return [
    `${type}/BEGIN`,
    `${type}/SUCCESS`,
    `${type}/FAIL`,
  ]
}

export default createPromiseMiddleware
