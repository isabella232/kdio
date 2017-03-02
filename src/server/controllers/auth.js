import config from 'config'

import client, { handleResponse } from 'server/koding-client'

export const postLogin = (req, res) => {
  const { username, password } = req.body
  const { clientId } = req.cookies
  const { slug } = config.get('koding')

  handleResponse(res, client(clientId)({
    constructorName: 'JGroup',
    method: 'joinUser',
    body: {
      username,
      password,
      slug,
      alreadyMember: 'true'
    }
  }))
}

export const getWhoami = (req, res) => {
  const { clientId } = req.cookies

  handleResponse(res, client(clientId)({
    constructorName: 'JUser',
    method: 'whoami'
  }))
}
