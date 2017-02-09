import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import formatDate from 'utils/format-date-relative'

import Block from 'components/Block'

const StatBox = ({ children, border, small }) => {
  style = border ? { borderRight: '1px solid #e6e6e6' } : null

  return (
    <Block flex align='center' px={2} style={style}>
      <Text small={small}>{children}</Text>
    </Block>
  )
}

const TemplateStats = (props, context) => {

  const { colors } = context.rebass
  const { cloneCount, machineCount, createdAt } = props

  return (
    <Block flex>
      <StatBox border>{machineCount} VMs</StatBox>
      <StatBox border>{cloneCount} Clones</StatBox>
      <StatBox small>Created {formatDate createdAt}</StatBox>
    </Block>
  )
}

TemplateStats.contextTypes = { rebass: PropTypes.object }

export default TemplateStats
