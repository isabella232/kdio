import React from 'react'
import { Heading, Text } from 'rebass'
import moment from 'moment'
import Block from 'components/Block'
import Avatar from 'components/Avatar'

const getFullName = (account) => {
  const { firstName, lastName } = account.profile
  return [firstName, lastName].filter(Boolean).join(' ')
}

const ProfileCard = ({ account }) => {
  if (!account) {
    return <span>Loading</span>
  }

  const fullName = getFullName(account)
  const { nickname } = account.profile

  const blockProps = {
    flex: true,
    flexColumn: true,
    align: 'center',
    justify: 'center',
    color: '#727272',
    rounded: true,
  }

  const parsed = moment(account.meta.createdAt).format('MMM Do, YYYY')

  return (
    <Block {...blockProps}>
      <Block mb={2}>
        <Avatar account={account} size={120} />
      </Block>
      <Block style={{ textAlign: 'center' }}>
        {fullName && <Heading level={3} mb={1}>{fullName}</Heading>}
        <Text style={{ fontSize: 16 }}>Username: @{nickname} | Joined: {parsed} </Text>
      </Block>
    </Block>
  )
}

export default ProfileCard
