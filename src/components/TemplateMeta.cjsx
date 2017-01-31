import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import ProviderIcon from 'components/ProviderIcon'
import AccessLevelBadge from 'components/AccessLevelBadge'
import Block from 'components/Block'


export default TemplateMeta = (props, context) ->

  { provider, title, nickname, accessLevel, big } = props

  titleStyle =
    whiteSpace: 'nowrap'
    textOverflow: 'ellipsis'
    overflow: 'hidden'
    width: '100%'
    fontSize: 28
    fontWeight: 300
    color: '#515151'

  titleStyle.fontSize = 18  unless big

  subtitleStyle =
    width: '100%'
    fontSize: 12
    fontWeight: 300
    color: '#989898'

  <Block flex align='center'>
    <ProviderIcon size={34} provider={provider} />
    <Block flex flexColumn mx={2}>
      <Block flex align='center'>
        <Block mr={2}>
          <Text style={titleStyle}>{title}</Text>
        </Block>
        <Block>
          <AccessLevelBadge level={accessLevel} />
        </Block>
      </Block>
      {big and <Text style={subtitleStyle}>Created by @{nickname}</Text>}
    </Block>
  </Block>


TemplateMeta.contextTypes = { rebass: PropTypes.object }
