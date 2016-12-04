import React from 'react'
import { map } from 'lodash'
import { Flex, Box, Grid } from 'reflexbox'
import { Container } from 'rebass'

import ProfileCard from 'components/ProfileCard'
import TemplateList from 'components/TemplateList'

export default UserProfile = (props) ->

  { templates, onTemplateClick, account, isAuthUser } = props

  <Container p={0}>
    <Grid col={3}>
      <ProfileCard account={account} />
    </Grid>
    <Grid col={9}>
      <TemplateList
        isAuthUser={isAuthUser}
        onTemplateClick={onTemplateClick}
        templates={templates} />
    </Grid>
  </Container>

