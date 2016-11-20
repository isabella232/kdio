import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { select as bongoSelectors } from 'modules/bongo'
import { select as sessionSelectors } from 'modules/session'
import { pickBy, map, filter, mapValues } from 'lodash'

import UserDashboard from 'components/UserDashboard'

userAccount = (accountId) ->
  bongoSelectors.one 'JAccount', accountId

whoami = createSelector(
  bongoSelectors.all('JAccount')
  sessionSelectors.accountId
  (accounts, accountId) -> accounts[accountId]
)

userTemplates = (accountId) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.originId is accountId

userCredentials = (accountId) ->
  bongoSelectors.some 'JCredential', (c) -> c.originId is accountId

templatesByTitle = (title) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.title is title

templateOwner = (templateId) ->
  createSelector(
    bongoSelectors.all 'JAccount'
    bongoSelectors.one 'JStackTemplate', templateId
    (accounts, template) -> accounts[template.originId]
  )

credentialOwner = (credentialId) ->
  createSelector(
    bongoSelectors.all 'JAccount'
    bongoSelectors.one 'JCredential', credentialId
    (accounts, credential) -> accounts[credential?.originId]
  )

templateStacks = (id) ->
  bongoSelectors.some 'JComputeStack', (s) -> s.baseStackId is id

templateClones = (id) ->
  bongoSelectors.some 'JStackTemplate', (t) -> t.config?.clonedFrom is id

templateCredentials = (templateId) ->
  createSelector(
    bongoSelectors.one('JStackTemplate', templateId)
    bongoSelectors.all('JCredential')
    (template, credentials) ->
      mapValues template.credentials, (providerCredentials) ->
        providerCredentials.map (id) -> credentials[id]
  )

stackMachines = (stackId) -> (state) ->
  createSelector(
    bongoSelectors.one('JComputeStack', stackId)
    bongoSelectors.all('JMachine')
    (stack, machines) -> stack?.machines.map (id) -> machines[id]
  )

stackCredentials = (stackId) ->
  createSelector(
    bongoSelectors.one('JComputeStack', stackId)
    bongoSelectors.all('JCredential')
    (stack, credentials) ->
      mapValues stack.credentials, (providerCredentials) ->
        providerCredentials.map (id) -> credentials[id]
  )

stackTemplate = (stackId) ->
  createSelector(
    bongoSelectors.one('JComputeStack', stackId)
    bongoSelectors.all('JStackTemplate')
    (stack, templates) -> templates[stack.baseStackId]
  )


decorateCredential = (credential) -> (state) ->
  return {
    id: credential._id
    title: credential.title
    provider: credential.provider
    accessLevel: credential.accessLevel
    owner: credentialOwner(credential._id)(state)
    _data: credential
  }

decorateTemplate = (template) -> (state) ->

  providers = template.config?.requiredProviders.filter (p) -> p isnt 'koding'
  providers or= []

  return {
    id: template._id
    title: template.title
    owner: templateOwner(template._id)(state)
    accessLevel: template.accessLevel
    content: template.template.rawContent
    providers: providers
    credentials: template.credentials
    machineCount: template.machines.length
    instances: templateStacks(template._id)(state)
    clones: templateClones(template._id)(state)
    _data: template
  }

templateData = (title) -> (state) ->

  templates = templatesByTitle(title)(state)

  return templates.map (t) -> decorateTemplate(t)(state)


mapStateToProps = (state, ownProps) ->
  account = whoami(state)
  templates = userTemplates(account._id)(state)
  templates = mapValues templates, (t) -> decorateTemplate(t)(state)
  credentials = userCredentials(account._id)(state)
  credentials = mapValues credentials, (c) -> decorateCredential(c)(state)

  return { account, templates, credentials }

mapDispatchToProps = (state) ->
  return {
    onStackClick: (id) -> console.log 'stack', id
    onCredentialClick: (id) -> console.log 'credential', id
  }

export default UserDashboardPage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserDashboard)
