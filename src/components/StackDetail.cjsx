import React, { Component } from 'react'
import { Pre, Heading, Text, Block as BaseBlock, Badge, withRebass, Panel, PanelHeader } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import { Container, GridGroup } from 'gridsys'
import TemplateDetail from './TemplateDetail'
import TemplateCard from './TemplateCard'
import MachineList from './MachineList'

Block = withReflex()(BaseBlock)

class StackDetail extends Component

  constructor: (props) ->

    super props

  getChildContext: ->
    return {
      gridsys:
        columnWidth: 320
      }

  render: ->
    { detail, templateCard, machines } = @props

    <Container>
      <Flex>
        <Box auto >
          <TemplateCard {...templateCard} />
          <MachineList {...@props} />
        </Box>
        <Box style={overflow:'auto'}>
          <TemplateDetail {...detail} />
        </Box>
      </Flex>
    </Container>

export default StackDetail

StackDetail.childContextTypes =
  gridsys: React.PropTypes.object