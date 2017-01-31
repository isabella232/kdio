import React, { Component } from 'react'
import { assign } from 'lodash'

import CenteredLayout from 'components/CenteredLayout'
import LandingForm from 'components/LandingForm'
import LandingNavbar from 'components/LandingNavbar'
import Block from 'components/Block'

class Signup extends Component

  constructor: (props) ->
    super props
    @state = { email: '', username: '', password: '' }


  onSubmit: (e) ->
    e.preventDefault()
    { username, password, email } = @state
    @props.onSubmit email, username, password


  onChange: (input) -> (event) =>
    state = assign {}, @state
    state[input] = event.target.value
    @setState state


  getFields: ->

    return [
      name: 'email'
      label: 'Email'
      value: @state.email
      onChange: @onChange 'email'
    ,
      name: 'username'
      label: 'Username'
      value: @state.username
      onChange: @onChange 'username'
    ,
      type: 'password'
      name: 'password'
      label: 'Password'
      value: @state.password
      onChange: @onChange 'password'
    ]


  render: ->
    <Block style={position: 'relative', height: '100%'}>
      <LandingNavbar />
      <CenteredLayout>
        <LandingForm
          title='Register'
          buttonTitle='Sign up'
          fields={@getFields()}
          onSubmit={@onSubmit.bind this} />
      </CenteredLayout>
    </Block>


export default Signup
