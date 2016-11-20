import React, { PropTypes, Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

export default class AppContainer extends Component

  @propTypes =
    routes  : PropTypes.object.isRequired
    store   : PropTypes.object.isRequired
    history : PropTypes.object.isRequired

  shouldComponentUpdate: -> no

  render: ->
    { store, history, routes } = @props
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
