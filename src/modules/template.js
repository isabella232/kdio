import { createSelector } from 'reselect'
import { find, filter } from 'lodash'

export const SEARCH_TEMPLATES = 'template/SEARCH_TEMPLATES'

// Actions

export const searchTemplates = (query) => ({
  type: SEARCH_TEMPLATES,
  meta: {
    constructorNames: {
      users: 'JAccount',
      templates: 'JStackTemplate'
    }
  },
  api: {
    endpoint: `/templates?q=${query}`,
    method: 'get'
  }
})

// Selectors

export const byId = (id) => (state) =>
  state.api.JStackTemplate[id]

export const templateBySlug = (slug) => (state) =>
  find(state.api.JStackTemplate, { slug })

export const templateStacks = (id) => (state) =>
  find(state.api.JComputeStack, stack => stack.baseStackId === id)


// Decorators

export const templateProviders = ({ config }) =>
  config
    ? config.requiredProviders.filter(p => p !== 'koding')
    : []

export const decorateTemplate = (state, template) => {

  const providers = templateProviders(template)

  return {
    id: template._id,
    title: template.title,
    accessLevel: template.accessLevel,
    content: template.template.rawContent,
    readme: template.description,
    provider: providers[0],
    machines: template.machines,
    instances: templateStacks(template._id)(state),
    createdAt: template.meta.createdAt,
    _data: template,
  }
}
