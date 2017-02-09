import React, { Component } from 'react'
import { Text, Input } from 'rebass'

import Block from 'components/Block'
import Button from 'components/Button'

const FirstName = ({ value, onChange }) => (
  <Input
    m={0} mr={1} hideLabel
    onChange={onChange}
    label='First name' name='firstName' value={value} />
)

const LastName = ({ value, onChange }) => (
  <Input m={0} hideLabel
    onChange={onChange}
    label='Last name' name='lastName' value={value} />
)

const NickName = ({ value }) => (
  <Input m={0} hideLabel disabled readOnly
    label='Username' name='nickname' value={value} />
)

const Line = ({ children, style = { borderBottom: '1px solid #e6e6e6' } }) => (
  <Block flex align='center' justify='space-between' py={3} style={style}>
    {children}
  </Block>
)

class Settings extends Component {

  constructor(props) {
    super(props)

    this.state = { firstName: '', lastName: '', nickname: '' }

    if (props.account) {
      const { firstName, lastName, nickname } = props.account.profile
      this.state = { firstName, lastName, nickname }
    }
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.account) {
      return
    }

    const { firstName, lastName, nickname } = nextProps.account.profile
    this.setState({ firstName, lastName, nickname })
  }

  onChange(field, event) {
    this.state[field] = event.target.value
    this.setState(this.state)
  }

  onSubmit() {
    this.props.onSubmit(this.props.account, this.state)
  }


  render() {

    if (!this.props.account) {
      return <div>Loading</div>
    }

    return (
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
              value={this.state.firstName}
              onChange={this.onChange.bind(this, 'firstName')} />
            <LastName
              value={this.state.lastName}
              onChange={this.onChange.bind(this, 'lastName')} />
          </Block>
        </Line>
        <Line>
          <Block>
            <Text>Username</Text>
            <Text small>Subtitle description goes here</Text>
          </Block>
          <Block>
            <NickName value={this.state.nickname} />
          </Block>
        </Line>
        <Block flex justify='flex-end' py={3}>
          <Button onClick={this.onSubmit.bind(this)} theme='default'>Save Changes</Button>
        </Block>
      </Block>
    )
  }
}

export default Settings
