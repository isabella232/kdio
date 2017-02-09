import React from 'react'
import { Text } from 'rebass'

const ProfileText = ({ account, small, style }) => {
  const { firstName, lastName, nickname } = account.profile
  const nicename = firstName === '' && lastName === ''
    ? `@${nickname}`
    : `${firstName} ${lastName}`

  return (
    <Text small={small} style={style}>{nicename.trim()}</Text>
  )
}

export default ProfileText
