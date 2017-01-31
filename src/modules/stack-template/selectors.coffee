import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'

export byId = (id) -> bongoSelectors.one 'JStackTemplate', id

export byTitle = (title) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.title is title

export owner = (id) ->
  createSelector(
    bongoSelectors.all 'JAccount'
    bongoSelectors.one 'JStackTemplate', id
    (accounts, template) -> accounts[template.originId]
  )

export stacks = (id) ->
  bongoSelectors.some 'JComputeStack', (s) -> s.baseStackId is id

export clones = (id) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.config?.clonedFrom is id

export credentials = (id) ->
  createSelector(
    bongoSelectors.one('JStackTemplate', templateId)
    bongoSelectors.all('JCredential')
    (template, credentials) ->
      mapValues template.credentials, (providerCredentials) ->
        providerCredentials.map (id) -> credentials[id]
  )

export decorate = (template) -> (state) ->
  providers = template.config?.requiredProviders.filter (p) ->
    p isnt 'koding'
  providers or= []
  _owner = owner(template._id)(state)
  return {
    id: template._id
    title: template.title
    owner: _owner
    nickname: _owner.profile.nickname
    accessLevel: template.accessLevel
    content: template.template.rawContent
    readme: template.description
    provider: providers[0]
    credentials: template.credentials
    machines: template.machines
    machineCount: template.machines.length
    instances: stacks(template._id)(state)
    clones: clones(template._id)(state)
    createdAt: template.meta.createdAt
    _data: template
  }
