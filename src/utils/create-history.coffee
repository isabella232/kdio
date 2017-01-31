import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

createHistory = (store) ->

  return syncHistoryWithStore browserHistory, store

export default createHistory

