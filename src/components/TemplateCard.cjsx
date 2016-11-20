import React, { PropTypes } from 'react'
import { Stat, Heading, Text, Block as BaseBlock, Badge, withRebass } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import ProviderIcon from 'components/ProviderIcon'

Block = withReflex()(BaseBlock)

propTypes =
  title: PropTypes.string
  machineCount: PropTypes.number
  instances: PropTypes.object
  clones: PropTypes.object
  onClick: PropTypes.func
  provider: PropTypes.string
  accessLevel: PropTypes.string

export default TemplateCard = (props, context) ->

  { colors } = context.rebass
  { provider, title, style, nickname, accessLevel, machineCount } = props

  <Block rounded style={style}>
    <CardTop
      title={title}
      color={colors[provider]}
      provider={provider}
      nickname={nickname} />
    <CardBottom
      machineCount={machineCount}
      accessLevel={accessLevel} />
  </Block>

TemplateCard.contextTypes = { rebass: PropTypes.object }

CardTop = ({ title, provider, color, nickname }) ->

  gradient = "linear-gradient(#{color}, rgba(255, 255, 255, .25))"

  style =
    backgroundImage: gradient
    color: '#fff'

  <Block py={2} backgroundColor={color} style={style}>
    <Flex column align='center' justify='center'>
      <ProviderIcon provider={provider} />
      <Heading level={2}>{title}</Heading>
      <Text small>Created by @{nickname}</Text>
    </Flex>
  </Block>

CardBottom = ({ machineCount, buildCount = 0, cloneCount = 0, accessLevel }) ->

  style = {}

  <Block column justify='center' align='center' p={2} backgroundColor='white' style={style}>
    <Block col={3} color="#727272" style={textAlign: 'center', margin: '0 auto', border: '1px solid #F2778A', borderRadius: '50px', paddingTop: '3px', paddingBottom: '3px'}>
      <Text small>{accessLevel}</Text>
    </Block>
    <Block wrap color="#989898" p={2}>
      <Flex wrap justify='space-between' gutter={2} align='center' style={{textAlign: 'center'}}>
        <Block borderRight borderColor='#EDEDED'auto>
          <Stat label='VMs' value={machineCount} />
        </Block>
        <Block borderRight borderColor='#EDEDED'auto>
          <Stat label='Builds' value={buildCount} />
        </Block>
        <Block auto>
          <Stat label='Clones' value={cloneCount} />
        </Block>
      </Flex>
    </Block>
  </Block>


noop = ->
TemplateCard.propTypes = propTypes
TemplateCard.defaultProps =
  title: 'Stack title'
  machineCount: 1
  instances: {}
  clones: {}
  onClick: noop
  provider: ''
  accessLevel: 'private'

  style:
    width: 300
    height: 270
    # boxShadow: '0 0 20px #999'
    overflow: 'hidden'
    MozMacOsxFontSmoothing: 'grayscale'
    WebkitFontSmoothing: 'antialiased'


