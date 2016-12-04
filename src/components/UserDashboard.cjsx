import React from 'react'
import { map } from 'lodash'
import { Flex, Box, Grid } from 'reflexbox'
import { Container } from 'rebass'

import ProfileCard from 'components/ProfileCard'
import TemplateList from 'components/TemplateList'

export default UserDashboard = (props) ->

  { templates, onTemplateClick, account } = props

  <Container p={0} style={width: 1260, maxWidth: 1260}>
    <Grid col={3}>
      <ProfileCard account={account} />
    </Grid>
    <Grid col={9}>
      <TemplateList
        onTemplateClick={onTemplateClick}
        templates={templates} />
    </Grid>
  </Container>

