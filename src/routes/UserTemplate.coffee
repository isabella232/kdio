import React from 'react'

import UserTemplatePage from 'pages/UserTemplate'

import ensureSessionAccount from 'utils/ensure-session-account'
import { loadByNickname, loadTemplates } from 'modules/user/actions'

export default UserTemplateRoute = (store) ->
  path: ':templateId'
  component: UserTemplatePage
  onEnter: (nextState, replace, done) ->
    { dispatch } = store
    ensureSessionAccount(store)
      .then -> dispatch loadByNickname(nextState.params.username)
      .then ({ payload: [account] }) -> dispatch loadTemplates(account._id)
      .then ({ payload: templates }) -> done()
      .catch (err) -> done(err) # TODO(umut): Proper error handling.

