import React, { Component } from 'react'
import { assign } from 'lodash'

import CenteredLayout from 'components/CenteredLayout'
import LandingForm, { FooterLinks } from 'components/LandingForm'
import LandingNavbar from 'components/LandingNavbar'
import Block from 'components/Block'


class Login extends Component

  onSubmit: (e) ->
    e.preventDefault()
    { username, password } = @state
    @props.onSubmit username, password


  onChange: (input) -> (event) =>
    state = assign {}, @state
    state[input] = event.target.value
    @setState state


  getFields: ->

    return [
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

  getFooterLinks: ->

    return [
      to: '/forgot'
      children: 'Forgot my password'
    ]


  render: ->

    <Block style={position: 'relative', height: '100%'}>
      <LandingNavbar />
      <CenteredLayout>
        <Block flex flexColumn>
          <LandingForm
            title='Login'
            buttonTitle='Sign in'
            fields={@getFields()}
            onSubmit={@onSubmit.bind this} />
          <FooterLinks links={@getFooterLinks()} />
        </Block>
      </CenteredLayout>
    </Block>

export default Login
