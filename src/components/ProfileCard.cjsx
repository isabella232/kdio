import React, { PropTypes } from 'react'
import {
  Block as BaseBlock, Heading, Text, Divider, NavItem
} from 'rebass'
import { withReflex, Box } from 'reflexbox'
import moment from 'moment'

Block = withReflex()(BaseBlock)

import Avatar from 'components/Avatar'

export default ProfileCard = ({ account }) ->

  fullName = getFullName account
  { nickname } = account.profile

  parsed = moment(account.meta.createdAt).format 'MMM Do, YYYY'

  <Block mr={2} mb={2} backgroundColor='white' color='#727272' p={3} rounded>
    <Block flex flexColumn align='center' justify='center' pb={2}>
      <Block pb={2}>
        <Avatar account={account} size={120} />
      </Block>
      {fullName and <Text style={fontSize: 20}>{fullName}</Text>}
      <Text style={fontSize: 16}>@{nickname}</Text>
    </Block>
    <Divider />
    <Block><NavItem pl={0} color='blue'>Add a bio</NavItem></Block>
    <Block><Text>Joined: {parsed}</Text></Block>
  </Block>


getFullName = (account) ->

  { firstName, lastName } = account.profile
  [firstName, lastName].filter(Boolean).join ' '


