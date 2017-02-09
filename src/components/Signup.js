import React, { Component } from 'react'
import { assign } from 'lodash'

import CenteredLayout from 'components/CenteredLayout'
import LandingForm from 'components/LandingForm'
import LandingNavbar from 'components/LandingNavbar'
import Block from 'components/Block'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = { email: '', username: '', password: '' }
  }

  onSubmit(event) {
    event.preventDefault()
    const { username, password, email } = this.state
    this.props.onSubmit(email, username, password)
  }

  onChange(input) {
    return (event) => {
      this.setState({
        ...this.state,
        [input]: event.target.value
      })
    }
  }

  getFields() {
    return [
      {
        name: 'email',
        label: 'Email',
        value: this.state.email,
        onChange: this.onChange('email')
      },
      {
        name: 'username',
        label: 'Username',
        value: this.state.username,
        onChange: this.onChange('username')
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        value: this.state.password,
        onChange: this.onChange('password')
      }
    ]

  }


  render() {
    return (
      <Block style={{position: 'relative', height: '100%'}}>
        <LandingNavbar />
        <CenteredLayout>
          <LandingForm
            title='Register'
            buttonTitle='Sign up'
            fields={this.getFields()}
            onSubmit={this.onSubmit.bind(this)} />
        </CenteredLayout>
      </Block>
    )
  }
}

export default Signup
