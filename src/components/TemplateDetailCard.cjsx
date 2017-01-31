import React, { PropTypes } from 'react'
import { Space } from 'rebass'
import TemplateMeta from 'components/TemplateMeta'
import TemplateStats from 'components/TemplateStats'
import Block from 'components/Block'


propTypes =
  title: PropTypes.string
  machineCount: PropTypes.number
  instances: PropTypes.object
  clones: PropTypes.object
  onClick: PropTypes.func
  provider: PropTypes.string
  accessLevel: PropTypes.string

export default TemplateDetailCard = (props, context) ->

  return <span>Loading</span>  unless props.template

  { colors } = context.rebass
  { provider, title, style, nickname, instances, createdAt
    accessLevel, machineCount, onClick, clones } = props.template

  cloneCount = Object.keys(clones).length

  <Block flex align='center' onClick={onClick} className='TemplateDetailCard' style={style}>
    <TemplateMeta
      big
      title={title}
      provider={provider}
      nickname={nickname}
      accessLevel={accessLevel} />
    <Space auto />
    <TemplateStats
      cloneCount={cloneCount}
      machineCount={machineCount}
      createdAt={createdAt} />
  </Block>

TemplateDetailCard.contextTypes = { rebass: PropTypes.object }

noop = ->

TemplateDetailCard.propTypes = propTypes

TemplateDetailCard.defaultProps =
  title: 'Stack title'
  instances: {}
  clones: {}
  onClick: noop
  provider: ''
  accessLevel: 'private'

  style:
    height: 120
    borderBottom: '1px solid #E6E6E6'
    # boxShadow: '0 0 20px #999'
    # overflow: 'hidden'
    MozMacOsxFontSmoothing: 'grayscale'
    WebkitFontSmoothing: 'antialiased'
