import React, { PropTypes } from 'react'
import { ButtonOutline, Space } from 'rebass'
import ProviderIcon from 'components/ProviderIcon'
import TemplateMeta from 'components/TemplateMeta'
import TemplateStats from 'components/TemplateStats'
import Block from 'components/Block'

const propTypes = {
  title: PropTypes.string,
  machineCount: PropTypes.number,
  instances: PropTypes.object,
  clones: PropTypes.object,
  onClick: PropTypes.func,
  provider: PropTypes.string,
  accessLevel: PropTypes.string,
}

const TemplateCard = (props, context) => {

  const { colors } = context.rebass
  const {
    provider, title, style, nickname, instances, createdAt,
    accessLevel, machineCount, onClick, rounded, clones
  } = props

  const cloneCount = Object.keys(clones).length

  return (
    <Block flex align='center' onClick={onClick} className='TemplateCard' style={style}>
      <TemplateMeta
        title={title}
        provider={provider}
        nickname={nickname}
        accessLevel={accessLevel} />
      <Space auto />
      <TemplateStats
        cloneCount={cloneCount}
        machineCount={machineCount}
        createdAt={createdAt} />
      <Block flex align='center'>
        <ButtonOutline style={{color: colors.base, padding: '5px 20px'}}>
          See Details
        </ButtonOutline>
      </Block>
    </Block>
  )
}

TemplateCard.contextTypes = { rebass: PropTypes.object }

const noop = () => {}

TemplateCard.propTypes = propTypes

TemplateCard.defaultProps = {
  title: 'Stack title',
  instances: {},
  clones: {},
  onClick: noop,
  provider: '',
  accessLevel: 'private',
  style: {
    height: 70,
    borderBottom: '1px solid #E6E6E6',
    MozMacOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  }
}

export default TemplateCard