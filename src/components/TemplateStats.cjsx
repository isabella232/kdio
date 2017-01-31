import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import formatDate from 'utils/format-date-relative'

import Block from 'components/Block'


export default TemplateStats = (props, context) ->

  { colors } = context.rebass
  { cloneCount, machineCount, createdAt } = props

  <Block flex>
    <StatBox border>{machineCount} VMs</StatBox>
    <StatBox border>{cloneCount} Clones</StatBox>
    <StatBox small>Created {formatDate createdAt}</StatBox>
  </Block>


StatBox = ({ children, border, small }) ->

  style = if border then { borderRight: '1px solid #e6e6e6' } else null

  <Block flex align='center' px={2} style={style}>
    <Text small={small}>{children}</Text>
  </Block>


TemplateStats.contextTypes = { rebass: PropTypes.object }
