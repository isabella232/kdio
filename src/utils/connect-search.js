import React, { Component, PropTypes } from 'react'
import isPromise from './is-promise'
import { debounce } from 'lodash'

const connectSearch = (config) => (SearchComponent) => {
  class ConnectedSearch extends Component {
    constructor(props) {
      super(props)
      this.state = { loading: false, items: [], value: '' }
    }

    onRequest({ value }) {
      const { onFetchRequest } = config
      const { store } = this.context

      const result = onFetchRequest({ value }, store)

      this.setState({ loading: true })

      if (isPromise(result)) {
        console.log('isPromise maaan')
        result.then(
          (items) => this.setState({ items, loading: false }),
          (error) => this.setState({ error, loading: false })
        )
        return
      }

      this.setState({ loading: false })
    }

    onClear() {
      this.setState({ loading: false, items: [], value: '' })
    }

    onSelected(event, { suggestion }) {
      if (typeof config.onItemSelected === 'function') {
        config.onItemSelected({ item: suggestion }, this.context.store)
      }
      this.setState({ loading: false, items: [], value: '' })
    }

    onChange({ target }) {
      this.setState({ value: target.value })
    }

    render() {
      const { items } = this.state

      const inputProps = {
        value: this.state.value,
        onChange: this.onChange.bind(this),
        placeholder: config.placeholder
      }

      const onRequest = debounce(this.onRequest.bind(this), 100)

      return (
        <SearchComponent
          items={items}
          inputProps={inputProps}
          onFetchRequest={onRequest}
          onClearRequest={this.onClear.bind(this)}
          onItemSelected={this.onSelected.bind(this)} />
      )
    }
  }

  const name = SearchComponent.displayName
    || SearchComponent.name
    || 'SearchComponent'

  ConnectedSearch.displayName = `ConnectedSearch(${name})`
  ConnectedSearch.contextTypes = { store: PropTypes.object }

  return ConnectedSearch
}

export default connectSearch
