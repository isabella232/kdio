import immutable from 'utils/immutable'
import * as actions from './actions'

export const reducer = (state = immutable({}), action) => {
  const { payload, type } = action

  switch (action.type) {
    case actions.WHOAMI:
      return state.set('accountId', payload[0]._id)
    default:
      return state
  }
}

export const select = {
  accountId: (state) => state.session.accountId
}

export { actions }
