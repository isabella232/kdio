import config from 'config'
import client, { handleResponse } from 'server/koding-client'

const fetchUser = (req) => {
  const { clientId } = req.cookies
  const { username } = req.params

  return client(clientId)({
    constructorName: 'JAccount',
    method: 'one',
    body: [{
      'profile.nickname': username
    }]
  })
}

export const getProfile = (req, res) => {
  handleResponse(res, fetchUser(req))
}

export const postProfile = (req, res) => {

  const { clientId } = req.cookies
  const { firstName, lastName } = req.body
  const { slug: group } = config.get('koding')

  const promise = fetchUser(req).then(user => {
    return client(clientId)({
      constructorName: 'JAccount',
      id: user._id,
      method: 'modify',
      body: {
        group,
        firstName,
        lastName
      }
    })
  }).then(() => fetchUser(req))

  return handleResponse(res, promise)
}

export const getTemplates = (req, res) => {
  const { clientId } = req.cookies
  const { slug: group } = config.get('koding')

  const promise = fetchUser(req).then(user => {
    return client(clientId)({
      constructorName: 'JStackTemplate',
      method: 'some',
      body: [{
        group,
        originId: user._id
      }]
    })
  })

  return handleResponse(res, promise)
}

export const getTemplate = (req, res) => {
  const { clientId } = req.cookies
  const { username, slug } = req.params
  const { slug: group } = config.get('koding')

  console.log('template id <<<<<<<<<<<<<<<')

  const promise = fetchUser(req).then(user => {
    return client(clientId)({
      constructorName: 'JStackTemplate',
      method: 'some',
      body: [{
        group,
        slug,
        originId: user._id,
      }]
    })
  }).then(result => {
    try {
      result = JSON.parse(result)
      if (!result.data.length) {
        throw new Error({
          error: true,
          message: 'There is no template with this slug'
        })
      }
      return result
    }
    catch(err) {
      Promise.reject(err)
    }
  })

  return handleResponse(res, promise)
}

export const getCredentials = (req, res) => {
  const { clientId } = req.cookies
  const { username } = req.params

  const promise = fetchUser(req).then(user => {
    return client(clientId)({
      constructorName: 'JCredential',
      method: 'some',
      body: [{
        originId: user._id
      }]
    })
  })

  return handleResponse(res, promise)
}
