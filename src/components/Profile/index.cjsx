import React from 'react'
import { Divider, Container, Section, SectionHeader } from 'rebass'
import { Grid } from 'reflexbox'

import StackList from '../../components/StackList'
import UserInfo from '../../components/Profile'

ProfilePage = ({ onStackClick = -> }) ->

  # return <div>Umut</div>

  <Container>
    <Grid col={3} pr={3}>
      <UserInfo />
    </Grid>
    <Grid col={9} pl={3}>
      <Divider />
      <StackList onItemClick={onStackClick}/>
    </Grid>
  </Container>


export default ProfilePage
