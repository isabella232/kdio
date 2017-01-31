import React from 'react'
import { Heading, Text } from 'rebass'
import moment from 'moment'
import Block from 'components/Block'
import Avatar from 'components/Avatar'

export default ProfileCard = ({ account }) ->

  return <span>Loading</span>  unless account

  fullName = getFullName account
  { nickname } = account.profile

  parsed = moment(account.meta.createdAt).format 'MMM Do, YYYY'

  blockProps =
    flex: true
    flexColumn: true
    align: 'center'
    justify: 'center'
    color: '#727272'
    rounded: true

  <Block {...blockProps}>
    <Block mb={2}>
      <Avatar account={account} size={120} />
    </Block>
    <Block style={textAlign: 'center'}>
      {fullName and <Heading level={3} mb={1}>{fullName}</Heading>}
      <Text style={fontSize: 16}>Username: @{nickname} | Joined: {parsed} </Text>
    </Block>
  </Block>


getFullName = (account) ->

  { firstName, lastName } = account.profile
  [firstName, lastName].filter(Boolean).join ' '
