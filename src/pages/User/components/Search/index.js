import React from 'react'
import { createConnector } from 'react-instantsearch'

import SearchAutoComplete from './SearchAutoComplete'
import SearchProvider from './SearchProvider'

const getProvidedProps = (props, state, search) => {
  const hits = search.results ? search.results.hits : []

  return {
    hits,
    query: state.query != null ? state.query : ''
  }
}

const refine = (props, searchState, nextQuery) => ({
  ...searchState,
  query: nextQuery
})

const connectSearch = createConnector({
  displayName: 'SearchAutoComplete',
  getProvidedProps,
  refine
})

const ConnectedSearch = connectSearch(SearchAutoComplete)

const SearchContainer = ({ attributes }) => (
  <SearchProvider indexName='dev_stacktemplates'>
    <ConnectedSearch attributes={attributes} />
  </SearchProvider>
)

SearchContainer.defaultProps = {
  attributes: ['title', 'description', 'template.rawContent']
}

export default SearchContainer
