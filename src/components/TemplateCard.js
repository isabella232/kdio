import React, { PropTypes } from 'react'
import { ButtonOutline, Space } from 'rebass'
import TemplateMeta from 'components/TemplateMeta'
import TemplateStats from 'components/TemplateStats'
import Block from 'components/Block'

const propTypes = {
  title: PropTypes.string,
  machines: PropTypes.array,
  instances: PropTypes.object,
  onClick: PropTypes.func,
  provider: PropTypes.string,
  accessLevel: PropTypes.string,
}

const TemplateCard = (props, context) => {

  const { colors } = context.rebass
  const {
    provider, title, style, nickname, instances, createdAt,
    accessLevel, machines, onClick, rounded
  } = props

  return (
    <Block flex align='center' onClick={onClick} className='TemplateCard' style={style}>
      <TemplateMeta
        title={title}
        provider={provider}
        nickname={nickname}
        accessLevel={accessLevel} />
      <Space auto />
      <TemplateStats machineCount={machines.length} />
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
  onClick: noop,
  provider: '',
  accessLevel: 'private',
  style: {
    MozMacOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  }
}

export default TemplateCard
