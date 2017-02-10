import getConfig from 'utils/get-config'
import $ from 'jquery'
import getSessionToken from 'utils/get-session-token'

const request = (url, body, sendCookies = true) => {
  const options = {
    url,
    type: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${getSessionToken()}`
    },
    data: JSON.stringify(body)
  }

  return $.ajax(options)
}

export const requestStatic = (constructorName, method, body) => {

  const { kodingUrl } = getConfig()
  const resourceEndpoint = `${constructorName}.${method}`
  const url = `${kodingUrl}/remote.api/${resourceEndpoint}`

  return request(url, body)
    .then((res) => {
      const data = Array.isArray(res.data) ? res.data : [res.data]
      return data.map(model => {
        model.constructorName = constructorName
        return model
      })
    })
}

export const requestInstance = (constructorName, method, id, options, query) => {

  const { kodingUrl } = getConfig()
  const resourceEndpoint = `${constructorName}.${method}`
  const url = `${kodingUrl}/remote.api/${resourceEndpoint}/${id}`

  return request(url, options, query)
    .then(res => {
      const data = Array.isArray(res.data) ? res.data : [res.data]
      return data.map(model => {
        model.constructorName = constructorName
        return model
      })
    })
}

export const ONE = 'bongo/ONE'
export const SOME = 'bongo/SOME'
export const UPDATE = 'bongo/UPDATE'
export const MODIFY = 'bongo/MODIFY'

export const staticAction = (method, actionType) => (constructorName, body) => {
  return {
    type: actionType,
    payload: requestStatic(constructorName, method, body)
  }
}

export const instanceAction = (method, actionType) => (instance, body) => {
  const { constructorName, _id } = instance
  return {
    type: actionType,
    payload: requestInstance(constructorName, method, _id, body)
  }
}

export const one = staticAction('one', ONE)
export const some = staticAction('some', SOME)
export const update = instanceAction('update', UPDATE)
export const modify = instanceAction('modify', MODIFY)
