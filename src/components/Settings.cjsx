import React from 'react'
import { Text, Input } from 'rebass'

import Block from 'components/Block'
import Button from 'components/Button'

export default class Settings extends React.Component

  constructor: (props) ->
    super props

    @state = { firstName: '', lastName: '', nickname: '' }

    if props.account
      { firstName, lastName, nickname } = props.account.profile
      @state = { firstName, lastName, nickname }


  componentWillReceiveProps: (nextProps) ->

    if nextProps.account
      { firstName, lastName, nickname } = nextProps.account.profile
      @setState { firstName, lastName, nickname }


  onChange: (field, event) ->

    @state[field] = event.target.value
    @setState @state


  onSubmit: ->

    @props.onSubmit @props.account, @state

  render: ->

    return <div>Loading</div>  unless @props.account

    <Block>
      <Line>
        <Block>
          <Text>Profile Image</Text>
          <Text small>Subtitle description goes here</Text>
        </Block>
        <Block>
          <Text>Change your profile picture at <a href="#">gravatar.com</a></Text>
        </Block>
      </Line>
      <Line>
        <Block>
          <Text>First Name and Last Name</Text>
          <Text small>Subtitle description goes here</Text>
        </Block>
        <Block flex>
          <FirstName
            value={@state.firstName}
            onChange={@onChange.bind this, 'firstName'} />
          <LastName
            value={@state.lastName}
            onChange={@onChange.bind this, 'lastName'} />
        </Block>
      </Line>
      <Line>
        <Block>
          <Text>Username</Text>
          <Text small>Subtitle description goes here</Text>
        </Block>
        <Block>
          <NickName value={@state.nickname} />
        </Block>
      </Line>
      <Block flex justify='flex-end' py={3}>
        <Button onClick={@onSubmit.bind this} theme='default'>Save Changes</Button>
      </Block>
    </Block>


FirstName = ({ value, onChange }) ->
  <Input
    m={0} mr={1} hideLabel
    onChange={onChange}
    label='First name' name='firstName' value={value} />


LastName = ({ value, onChange }) ->

  <Input m={0} hideLabel
    onChange={onChange}
    label='Last name' name='lastName' value={value} />


NickName = ({ value }) ->

  <Input m={0} hideLabel disabled readOnly
    label='Username' name='nickname' value={value} />


Line = ({ children }) ->
  <Block flex align='center' justify='space-between' py={3} style={borderBottom: '1px solid #e6e6e6'}>
    {children}
  </Block>
