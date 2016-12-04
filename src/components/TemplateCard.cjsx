import React, { PropTypes } from 'react'
import { Stat, Heading, Text, Block as BaseBlock, Badge, withRebass, ButtonOutline } from 'rebass'
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
  { provider, title, style, nickname, instances
    accessLevel, machineCount, onClick, rounded, clones } = props

  <Block onClick={onClick} className='TemplateCard' style={style}>
    <CardTop
      title={title}
      color={colors[provider]}
      provider={provider}
      nickname={nickname} />
    <CardBottom
      rounded={rounded}
      buildCount={Object.keys(instances).length}
      cloneCount={Object.keys(clones).length}
      machineCount={machineCount}
      accessLevel={accessLevel} />
  </Block>

TemplateCard.contextTypes = { rebass: PropTypes.object }

CardTop = ({ title, provider, color, nickname }) ->

  gradient = "linear-gradient(#{color}, rgba(255, 255, 255, .25))"

  style =
    backgroundImage: gradient
    color: '#fff'
    borderRadius: '6px 6px 0 0'

  headingStyle =
    whiteSpace: 'nowrap'
    textOverflow: 'ellipsis'
    overflow: 'hidden'
    width: '100%'
    textAlign: 'center'

  <Block flex flexColumn align='center' justify='center' p={2} backgroundColor={color} style={style}>
    <ProviderIcon provider={provider} />
    <Heading level={2} style={headingStyle}>{title}</Heading>
    <Text small>Created by @{nickname}</Text>
  </Block>

CardBottom = ({ machineCount, buildCount, cloneCount, accessLevel, rounded }) ->

  style =
    borderRadius: if rounded then '0 0 6px 6px' else '0'

  <Block backgroundColor='white' style={style}>
    <Flex column wrap>
      <Block flex pt={3} pb={2} align='center' justify='center'>
        <ButtonOutline theme='success' color='black' pill>
          <Text small>{accessLevel}</Text>
        </ButtonOutline>
      </Block>

      <Block color="#989898" p={2}>
        <Flex wrap justify='space-between' gutter={2} align='center' style={{textAlign: 'center'}}>
          <Block py={1} borderRight borderColor='#EDEDED' auto style={{borderWidth: 2}}>
            <Stat label='VMs' value={machineCount} />
          </Block>
          <Block py={1} borderRight borderColor='#EDEDED' auto style={{borderWidth: 2}}>
            <Stat label='Builds' value={buildCount} />
          </Block>
          <Block py={1} auto>
            <Stat label='Clones' value={cloneCount} />
          </Block>
        </Flex>
      </Block>
    </Flex>
  </Block>


noop = ->
TemplateCard.propTypes = propTypes
TemplateCard.defaultProps =
  title: 'Stack title'
  instances: {}
  clones: {}
  onClick: noop
  provider: ''
  accessLevel: 'private'

  style:
    width: 300
    height: 270
    # boxShadow: '0 0 20px #999'
    # overflow: 'hidden'
    MozMacOsxFontSmoothing: 'grayscale'
    WebkitFontSmoothing: 'antialiased'


