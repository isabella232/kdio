import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import { capitalize } from 'lodash'
import Block from 'components/Block'

const AccessLevelBadge = (props, context) => {

  const { colors } = context.rebass

  const style = {
    borderRadius: 9999,
    padding: '3px 10px',
    border: `1px solid ${colors.green}`
  }

  return (
    <Block flex align='center' justify='center' style={style}>
      <Text small>{capitalize(props.level)}</Text>
    </Block>
  )
}

AccessLevelBadge.contextTypes = { rebass: PropTypes.object }

export default AccessLevelBadge
