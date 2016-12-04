import React, { PropTypes } from 'react'
import { map, assign, size } from 'lodash'
import { withReflex, Box, Grid } from 'reflexbox'
import { Container, Block as BaseBlock, Heading, Pre } from 'rebass'

import TemplateCard from 'components/TemplateCard'
import ShowMoreCard from 'components/ShowMoreCard'

Block = withReflex()(BaseBlock)

export default TemplateList = (props) ->

  { onTemplateClick, templates, isAuthUser } = props

  console.log size(templates), templates

  if size(templates) > 0
    <Box>
      {map templates, (t) ->
        <Grid key={t.id} col={4} mb={2}>
          <TemplateCard {...t} rounded
            onClick={onTemplateClick.bind null, t} />
        </Grid>}
    </Box>
  else if isAuthUser
    <EmptyListAuthUser />
  else
    <EmptyListGeneric />


export EmptyListGeneric = ->
  color = 'white'
  style = { height: '347px' }
  <Block rounded flex flexColumn p={2}
    align='center' justify='center'
    backgroundColor={color} style={style}>
      <Heading p={1} level={3} color="#515151">This user has not published any template yet.</Heading>
      <Heading p={1} level={4} color="#989898">Check back later, we will list them here once there is one.</Heading>
  </Block>


export EmptyListAuthUser = ->
  color = 'white'
  style = { height: '347px' }
  <Block rounded flex flexColumn p={2}
    align='center' justify='center'
    backgroundColor={color} style={style}>
      <Heading p={1} level={3} color="#515151">You don’t have any template yet.</Heading>
      <Heading p={1} level={4} color="#989898">If you want to create one, please run the code below on your terminal.</Heading>
      <Pre p={2} mt={2} backgroundColor="#F9F9F9" color="#434343">:> kd template create</Pre>
  </Block>
