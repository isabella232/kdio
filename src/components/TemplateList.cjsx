import React, { PropTypes } from 'react'
import { map, assign } from 'lodash'
import { Flex, Box, Grid } from 'reflexbox'
import { Container } from 'rebass'

import TemplateCard from 'components/TemplateCard'
import ShowMoreCard from 'components/ShowMoreCard'

export default TemplateList = (props) ->

  { onTemplateClick, templates } = props

  <Box>
    {map templates, (t) ->
      <Grid key={t.id} col={4} mb={2}>
        <TemplateCard {...t} rounded
          onClick={onTemplateClick.bind null, t}
        />
      </Grid>}
  </Box>


