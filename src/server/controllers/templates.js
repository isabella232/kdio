import client, { handleResponse } from 'server/koding-client'
import parseSearchQuery from 'server/parse-search-query'

export const searchTemplates = (req, res) => {
  const { clientId } = req.cookies
  const { q } = req.query

  const { username, ...query } = parseSearchQuery(q)

  const promise = Promise.resolve()
    .then(() =>
      client(clientId)({
        constructorName: 'JAccount',
        method: 'one',
        body: {
          'profile.nickname': username
        }
      })
    )
    .then(user => JSON.parse(user).data)
    .then(user =>
      client(clientId)({
        constructorName: 'JStackTemplate',
        method: 'some',
        body: [{
          ...query,
          originId: user._id,
          group: 'kd-io'
        }]
      })
    )

  return handleResponse(res, promise)
}
