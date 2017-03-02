import config from 'config'
import { omit } from 'lodash'

import request from './request'

const { protocol, host, port, slug, apiToken } = config.get('koding')

const generateApiUri = (clientId) => {
  let url = `${protocol}://${slug}.${host}`

  if (port !== 80) {
    url += `:${port}`
  }

  url += `/remote.api/${clientId || apiToken}`

  return url
}

export default (clientId) => (options) => {

  const { constructorName, method, id, body } = options
  const apiUri = generateApiUri(clientId)
  const url = `${apiUri}/${constructorName}.${method}${id ? `/${id}` : ''}`

  return request(url, body)
}

export const handleResponse = (res, promise) => {
  return promise.then(result => {
    try {
      if ('string' === typeof result) {
        result = JSON.parse(result)
      }
      res.status(200).json(result.data)
    }
    catch (err) {
      console.error({ err })
      res.status(500).send(err)
    }
  }, err => {
    console.error({ err })
    res.status(500).send(err)
  })
}
