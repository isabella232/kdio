import React, { Component } from 'react'
import styled from 'styled-components'

import Heading from 'components/Heading'
import Block from 'components/Block'
import Button from 'components/Button'
import Text from 'components/Text'
import Input from 'sparkle/Input'
import Link from 'components/Link'

import UserPageHeader from 'pages/User/components/Header'

const FirstName = ({ value, onChange }) => (
  <Input
    name='firstName'
    placeholder='First name'
    value={value}
    onChange={onChange}
  />
)

const LastName = ({ value, onChange }) => (
  <Input
    name='lastName'
    placeholder='Last name'
    value={value}
    onChange={onChange} />
)

const NickName = ({ value }) => (
  <Input
    disabled
    name='nickname'
    placeholder='Username'
    value={value} />
)

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
  padding: 30px 0;

  input + input {
    margin-left: 10px;
  }
`

const Row = ({ title, description, children }) => (
  <RowWrapper>
    <Block>
      <Text level={1} children={title} />
      <Text level={3} children={description} />
    </Block>
    <Block flex>
      {children}
    </Block>
  </RowWrapper>
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

    return (
      <section>
        <UserPageHeader>
          <Heading level={1}>Settings</Heading>
        </UserPageHeader>
        <Wrapper>
          <Row
            title='Profile Image'
            description='Subtitle description goes here'>
            <Text level={2}>Change your profile picture at <a href="#" style={{color: '#67A2EE'}}>gravatar.com</a></Text>
          </Row>

          <Row
            title='First Name and Last Name'
            description='Subtitle description goes here'>
            <FirstName
              value={this.state.firstName}
              onChange={this.onChange.bind(this, 'firstName')} />
            <LastName
              value={this.state.lastName}
              onChange={this.onChange.bind(this, 'lastName')} />
          </Row>

          <Row
            title='Username'
            description='Subtitle description goes here'>
            <NickName value={this.state.nickname} />
          </Row>

          <Block flex justify='flex-end' py={3}>
            <Button onClick={this.onSubmit.bind(this)} theme='info' style={{color: 'white'}}>Save Changes</Button>
          </Block>
        </Wrapper>
      </section>
    )
  }
}

const Wrapper = styled.div`
  width: 780px;
  margin: 0 auto;
`

export default Settings
