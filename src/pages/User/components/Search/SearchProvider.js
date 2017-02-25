import React from 'react'
import { connectSearchBox, connectRefinementList } from 'react-instantsearch/connectors'
import { InstantSearch, Configure } from 'react-instantsearch/dom'
import { map } from 'lodash'

import config from 'config'

const VirtualSearchBox = connectSearchBox(() => null)

export default class SearchProvider extends React.Component {

  static defaultProps = {
    hitsPerPage: 3
  }

  render() {
    const { hitsPerPage, indexName, children } = this.props
    const { appId, apiKey } = config.algolia

    return (
      <InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
        <Configure hitsPerPage={hitsPerPage} />
        <VirtualSearchBox />
        {children}
      </InstantSearch>
    )
  }
}
