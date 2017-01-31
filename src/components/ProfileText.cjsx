import React from 'react'
import { Text } from 'rebass'

export default ProfileText = ({ account, small, style }) ->

  { firstName, lastName, nickname } = account.profile

  nicename = if firstName is '' and lastName is ''
  then "@#{nickname}"
  else "#{firstName} #{lastName}"

  <Text small={small} style={style}>{nicename.trim()}</Text>
