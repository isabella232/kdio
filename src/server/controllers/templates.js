import config from 'config'
import client, { handleResponse } from 'server/koding-client'
import parseSearchQuery from 'server/parse-search-query'
import { uniqBy } from 'lodash'

const parseData = (thing) => {
  return thing && JSON.parse(thing).data
}

export const searchTemplates = (req, res) => {
  const { clientId } = req.cookies
  const { q } = req.query
  const { slug } = config.get('koding')

  let promise = Promise.resolve()

  const { username, ...query } = parseSearchQuery(q)

  console.log('parsed >>>', { username, query })

  if (username) {
    promise = promise.then(() =>
      client()({
        constructorName: 'JAccount',
        method: 'one',
        body: {
          'profile.nickname': username
        }
      })
    ).then(parseData)
  }

  promise = promise.then(user =>
    client()({
      constructorName: 'JStackTemplate',
      method: 'some',
      body: [{
        ...query,
        group: slug,
        accessLevel: { $ne: 'private' },
        originId: user && user._id,
      }]
    }).then(parseData)
  )

  promise = promise.then(templates => {
    const ops = uniqBy(templates, 'originId').map(template => {
      return client()({
        constructorName: 'JAccount',
        method: 'one',
        body: {
          _id: template.originId
        }
      }).then(parseData).then(user => ({ user, template }))
    })

    return Promise.all(ops)
  })

  promise = promise.then(results => {
    let users = []
    let templates = []

    results.forEach(({ user, template }) => {
      users.push(user)
      templates.push(template)
    })

    return { data: { users, templates } }
  })

  return handleResponse(res, promise)
}
