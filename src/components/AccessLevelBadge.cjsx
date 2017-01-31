import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import { capitalize } from 'lodash'
import Block from 'components/Block'


export default AccessLevelBadge = (props, context) ->

  { colors } = context.rebass

  style =
    borderRadius: 9999
    padding: '3px 10px'
    border: "1px solid #{colors.green}"

  <Block flex align='center' justify='center' style={style}>
    <Text small>{capitalize props.level}</Text>
  </Block>

AccessLevelBadge.contextTypes = { rebass: PropTypes.object }
