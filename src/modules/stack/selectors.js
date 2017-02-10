import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'
import { select as sessionSelectors } from 'modules/session'

export const machines = (id) =>
  createSelector(
    bongoSelectors.one('JComputeStack', id),
    bongoSelectors.all('JMachine'),
    (stack, machines) => stack && stack.machines.map(mId => machines[mId])
  )

export const credentials = (stackId) =>
  createSelector(
    bongoSelectors.one('JComputeStack', stackId),
    bongoSelectors.all('JCredential'),
    (stack, credentials) =>
      mapValues(
        stack.credentials,
        (providerCredentials) => providerCredentials.map(id => credentials[id])
      )
  )

export const template = (id) =>
  createSelector(
    bongoSelectors.one('JComputeStack', id),
    bongoSelectors.all('JStackTemplate'),
    (stack, templates) => templates[stack.baseStackId]
  )
