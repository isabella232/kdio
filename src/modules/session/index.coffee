import immutable from 'utils/immutable'
import * as actions from './actions'

export reducer = (state = immutable({}), action) ->

  { payload, type } = action

  switch action.type
    when actions.WHOAMI then state.set 'accountId', payload[0]._id
    else state

export select =
  accountId: (state) -> state.session.accountId

export { actions }
