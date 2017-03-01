import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import formatDate from 'utils/format-date-relative'

import Block from 'components/Block'

const StatBox = ({ children, border, small, label }) => {
  const style = {
    height: 70,
    borderLeft: border ? '1px solid #e6e6e6' : 'none',
  }

  const statStyle = {
    fontSize: 20,
    lineHeight: '28px',
    fontWeight: 600,
    color: '#989898'
  }

  const labelStyle = {
    fontSize: 14,
    fontWeight: 300,
    color: '#989898'
  }

  const blockProps = {
    flex: true,
    flexColumn: true,
    align: 'center',
    justify: 'center',
    px: 4,
    style: style
  }

  return (
    <Block {...blockProps}>
      <Text style={statStyle}>{children}</Text>
      {label && <Text style={labelStyle}>{label}</Text>}
    </Block>
  )
}

const TemplateStats = (props) => {

  const { machineCount } = props

  return (
    <Block flex ml={2}>
      <StatBox border label='VMs'>{machineCount}</StatBox>
    </Block>
  )
}

export default TemplateStats
