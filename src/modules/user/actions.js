import { actions as bongoActions } from 'modules/bongo'

export const loadByNickname = (nickname) =>
  bongoActions.one('JAccount', [{ 'profile.nickname': nickname }])


export const modify = (account, body) =>
  bongoActions.modify(account, body)
