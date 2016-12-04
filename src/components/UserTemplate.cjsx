import React from 'react'

import { Container } from 'rebass'
import { Grid } from 'reflexbox'

import TemplateCard from 'components/TemplateCard'
import TemplateDetail from 'components/TemplateDetail'
import MachineList from 'components/MachineList'

export default UserTemplate = (props) ->
  { template } = props
  <Container p={0}>
    <Grid col={3}>
      <TemplateCard {...template} />
      <MachineList machines={template.machines} />
    </Grid>
    <Grid col={9}>
      <TemplateDetail {...template} />
    </Grid>
  </Container>
