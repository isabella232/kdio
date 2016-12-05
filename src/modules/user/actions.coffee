import { actions as bongoActions } from 'modules/bongo'

export loadByNickname = (nickname) ->
  bongoActions.one 'JAccount', [{ 'profile.nickname': nickname }]

export loadTemplates = (id) ->
  bongoActions.some 'JStackTemplate', [{originId: id}]

