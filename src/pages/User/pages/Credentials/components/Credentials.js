import React from 'react'
import { Text, Space, Pre, Heading, Arrow } from 'rebass'

import Block from 'components/Block'
import SimpleList from 'components/SimpleList'
import EmptyWithMessage from 'components/EmptyWithMessage'
import PageHeader from 'components/PageHeader'
import ProviderIcon from 'components/ProviderIcon'


export const Header = () => (
  <PageHeader>Credentials</PageHeader>
)

export default class Credentials extends React.Component {

  static defaultProps = {
    isLoading: false
  }

  constructor(props) {
    super(props)
    this.state = { expandedIndex: null, filter: 'all' }
  }

  getFilteredData() {
    const { filter } = this.state
    const { credentials } = this.props

    const list = Object.keys(credentials).map(key => credentials[key])

    return filter === 'all'
      ? list
      : list.filter(c => c.provider === filter)
  }

  onCredentialClick(credential) {
    this.props.onCredentialClick(credential)
  }

  renderHeader() {
    return (
      <CredentialsHeader filter={this.state.filter} />
    )
  }

  renderRow(index) {
    const credential = this.getFilteredData()[index]

    if (!credential) {
      return null
    }

    const { id, provider, title } = credential

    return (
      <Credential key={id} provider={provider} title={title} />
    )
  }

  renderEmpty() {
    return (
      <EmptyWithMessage
        title="You haven't created a credential yet!"
        message="If you want to create one, please run the code below on your terminal."
        command="kd credential create" />
    )
  }

  renderLoading() {
    return (
      <CredentialsLoading />
    )
  }

  render() {
    const { isLoading } = this.props

    const style = {
      width: 780,
      margin: '0 auto'
    }

    return (
      <Block style={style}>
        <SimpleList
          rowCount={this.getFilteredData().length}
          isLoading={isLoading}
          renderLoading={this.renderLoading.bind(this)}
          renderEmpty={this.renderEmpty.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          renderRow={this.renderRow.bind(this)} />
      </Block>
    )
  }
}

const Line = ({ children, onClick, style }) => {
  style = {
    borderBottom: '1px solid #e6e6e6',
    ...style
  }

  return (
    <Block onClick={onClick} flex align='center' justify='space-between' py={3} style={style}>
      {children}
    </Block>
  )
}

const Credential = ({ provider, title, onClick }) => (
  <Block flex onClick={onClick} style={{ fontSize: 16, fontWeight: 600, color: '#727272' }}>
    <ProviderIcon size={24} provider={provider} />
    <Text ml={2}>{title}</Text>
    <Space auto />
    <Arrow />
  </Block>
)

const CredentialsHeader = ({ filter }) => (
  <Block flex style={{ color: '#989898', fontSize: 14 }}>
    <div>Credential Name</div>
    <Space auto />
    <div>
      Filter by <strong>{filter}</strong><Arrow />
    </div>
  </Block>
)

const CredentialsLoading = () => (
  <Block rounded flex flexColumn p={2}
    align='center' justify='center'
    backgroundColor='white' style={{ height: 347 }}>
    Loading
  </Block>
)
