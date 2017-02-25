import { actions as bongoActions } from 'modules/bongo'

const FETCH_DATA = 'credential/FETCH_DATA'

export const fetchData = (id) => ({
  type: FETCH_DATA,
  payload: bongoActions.requestInstance('JCredential', 'fetchData', id)
    .then(([result]) => result && [{ [id]: result.meta }])
})
