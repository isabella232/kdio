import React, { Component } from 'react'
import { assign } from 'lodash'

import {
  Text, Input, Button, Panel
  PanelHeader, Container, LinkBlock, NavItem
} from 'rebass'

import { Box } from 'reflexbox'
import { Link } from 'react-router'

class Login extends Component

  constructor: (props) ->
    super props
    @state =
      username: 'umut'
      password: '123123123'


  onSubmit: (e) ->
    e.preventDefault()

    { username, password } = @state

    @props.onSubmit username, password


  onChange: (input) -> (event) =>
    state = assign {}, @state
    state[input] = event.target.value
    @setState state


  render: ->
    <Box col={4}>
      <Panel>
        <PanelHeader>Login</PanelHeader>
        <LoginForm
          username={@state.username}
          password={@state.password}
          onChange={@onChange.bind this}
          onSubmit={@onSubmit.bind this} />
      </Panel>
      <NavItem small to='/forgot' is={Link}>Forgot my password</NavItem>
    </Box>


LoginForm = (props) ->
  <form onSubmit={props.onSubmit}>
    <Input
      name='username'
      label='username'
      value={props.username}
      onChange={props.onChange 'username'} />
    <Input
      name='password'
      type='password'
      label='password'
      value={props.password}
      onChange={props.onChange 'password'} />
    <Button type='submit'>Sign in</Button>
  </form>

export default Login

