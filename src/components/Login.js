import React, { Component } from 'react'

import CenteredLayout from 'components/CenteredLayout'
import LandingForm, { FooterLinks } from 'components/LandingForm'
import LandingNavbar from 'components/LandingNavbar'
import Block from 'components/Block'

class Login extends Component {
  onSubmit(event) {
    event.preventDefault()
    const { username, password } = this.state

    this.props.onSubmit(username, password)
  }

  onChange(input) {
    return ({ target }) => {
      this.setState({
        ...this.state,
        [input]: target.value
      })
    }
  }

  getFields() {
    return [
      {
        name: 'username',
        label: 'Username',
        value: this.state.username,
        onChange: this.onChange 'username',
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        value: this.state.password,
        onChange: this.onChange 'password',
      }
    ]
  }

  getFooterLinks() {
    return [
      to: '/forgot',
      children: 'Forgot my password'
    ]
  }

  render() {
    return (
      <Block style={{ position: 'relative', height: '100%' }}>
        <LandingNavbar />
        <CenteredLayout>
          <Block flex flexColumn>
            <LandingForm
              title='Login'
              buttonTitle='Sign in'
              fields={this.getFields()}
              onSubmit={this.onSubmit.bind(this)} />
            <FooterLinks links={this.getFooterLinks()} />
          </Block>
        </CenteredLayout>
      </Block>
    )
  }
}

export default Login
