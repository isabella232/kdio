import React from 'react'

const connectPage = (config) => (PageComponent) => {
  class ConnectedPage extends React.Component {

    constructor(props) {
      super(props)
      this.state = { loading: true, error: null }
    }

    componentDidMount() {
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

const isPromise = thing => thing && thing.then && typeof thing.then === 'function'

export default connectPage
