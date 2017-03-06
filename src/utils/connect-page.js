import React from 'react'
import isPromise from './is-promise'

const connectPage = (config) => (PageComponent) => {
  class ConnectedPage extends React.Component {

    constructor(props) {
      super(props)
      this.state = { loading: true, error: null }
    }

    componentDidMount() {
      this.loadContent()
    }

    componentDidUpdate(nextProps) {
      if (nextProps.pathname !== this.props.pathname) {
        this.loadContent()
      }
    }

    loadContent() {
      const { onPageLoad } = config
      const { store } = this.context

      const result = onPageLoad(this.props, store)

      if (isPromise(result)) {
        result.then(
          () => this.setState({ loading: false }),
          (error) => this.setState({ error, loading: false })
        )
        return
      }

      this.setState({ loading: false })
    }

    render() {
      const { loading, error } = this.state
      const props = { ...this.props, loading, error }

      return (
        <PageComponent {...props} />
      )
    }
  }

  const name = PageComponent.displayName
    || PageComponent.name
    || 'PageComponent'

  ConnectedPage.displayName = `ConnectedPage(${name})`
  ConnectedPage.contextTypes = { store: React.PropTypes.object }

  return ConnectedPage
}


export default connectPage
