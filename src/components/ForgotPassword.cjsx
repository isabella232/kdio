import React, { Component } from 'react'

import {
  Text, Input, Button, Panel
  PanelHeader, Container, LinkBlock, NavItem
} from 'rebass'

import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'

class ForgotPassword extends Component

  constructor: (props) ->
    super props
    @state = { username: '' }


  onChange: (event) -> @setState { username: event.target.value }


  onSubmit: (e) -> e.preventDefault()


  render: ->
    <Box col={4}>
      <Panel>
        <PanelHeader>Forgot Password</PanelHeader>
        <ForgotPasswordForm
          onChange={@onChange.bind this}
          onSubmit={@onSubmit.bind this} />
      </Panel>
      <NavItem small to='/login' is={Link}>I want to login</NavItem>
    </Box>


ForgotPasswordForm = (props) ->
  <form onSubmit={props.onSubmit}>
    <Input
      name='username'
      label='username'
      value={props.username}
      onChange={props.onChange} />
    <Button type='submit'>Submit</Button>
  </form>

export default ForgotPassword
