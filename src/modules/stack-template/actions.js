import { actions as bongoActions } from 'modules/bongo'

export const loadBySlug = (slug) =>
  bongoActions.some('JStackTemplate', [{ group: 'kd-io', slug }])

export const loadByOriginId = (originId, query) =>
  bongoActions.some('JStackTemplate', [{ group: 'kd-io', originId, ...query }])
