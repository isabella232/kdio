import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'

import slugify from 'utils/slugify'

export const byId = (id) => bongoSelectors.one('JStackTemplate', id)

export const byTitle = (title) =>
  bongoSelectors.some(
    'JStackTemplate',
    (t) => t.title === title
  )

export const bySlug = (slug) => (
  createSelector(
    bongoSelectors.some('JStackTemplate', t => t.slug === slug),
    templates => {
      let keys = templates ? Object.keys(templates) : []
      return keys.length ? templates[keys[0]] : null
    }
  )
)

export const owner = (id) =>
  createSelector(
    bongoSelectors.all('JAccount'),
    bongoSelectors.one('JStackTemplate', id),
    (accounts, template) => template && accounts[template.originId]
  )

export const stacks = (id) =>
  bongoSelectors.some(
    'JComputeStack',
    (s) => s.baseStackId === id
  )

export const clones = (id) =>
  bongoSelectors.some(
    'JStackTemplate',
    (t) => t.config && t.config.clonedFrom == id
  )

export const credentials = (id) =>
  createSelector(
    bongoSelectors.one('JStackTemplate', templateId),
    bongoSelectors.all('JCredential'),
    (template, credentials) =>
      mapValues(
        template.credentials,
        (providerCredentials) => providerCredentials.map(id => credentials[id])
      )
  )

export const decorate = (template) => (state) => {
  let providers = (
    template.config && template.config.requiredProviders.filter(p => p !== 'koding')
  )

  providers = providers || []

  const _owner = owner(template._id)(state)

  return {
    id: template._id,
    title: template.title,
    owner: _owner,
    nickname: _owner.profile.nickname,
    accessLevel: template.accessLevel,
    content: template.template.rawContent,
    readme: template.description,
    provider: providers[0],
    credentials: template.credentials,
    machines: template.machines,
    machineCount: template.machines.length,
    instances: stacks(template._id)(state),
    clones: clones(template._id)(state),
    createdAt: template.meta.createdAt,
    _data: template,
  }
}
