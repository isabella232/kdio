import React, { PropTypes } from 'react'
import { Text } from 'rebass'
import ProviderIcon from 'components/ProviderIcon'
import AccessLevelBadge from 'components/AccessLevelBadge'
import Block from 'components/Block'


const TemplateMeta = (props, context) => {

  const { provider, title, nickname, accessLevel, big } = props

  const titleStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    fontSize: big ? 28 : 18,
    fontWeight: 300,
    color: '#515151',
  }

  const subtitleStyle = {
    width: '100%',
    fontSize: 12,
    fontWeight: 300,
    color: '#989898',
  }

  return (
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
        {big && <Text style={subtitleStyle}>Created by @{nickname}</Text>}
      </Block>
    </Block>
  )
}

TemplateMeta.contextTypes = { rebass: PropTypes.object }

export default TemplateMeta
