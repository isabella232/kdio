import axios from 'axios'

const createApiMiddleware = () => ({ dispatch }) => next => action => {

  if (!action.api) {
    return next(action)
  }

  const { type, meta, api: { endpoint, method, data } } = action

  // create a request as promise to be passed to promise middleware.
  const promise = () =>
    axios({
      url: `/api${endpoint}`,
      method,
      data
    }).then(result => result.data)

  return next({ type, meta, promise })
}



export default createApiMiddleware
