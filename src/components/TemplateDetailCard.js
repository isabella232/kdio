import React, { PropTypes } from 'react'
import { Space } from 'rebass'
import TemplateMeta from 'components/TemplateMeta'
import TemplateStats from 'components/TemplateStats'
import Block from 'components/Block'


const TemplateDetailCard = (props, context) => {

  if (!props.template) {
    return <span>Loading</span>
  }

  const { colors } = context.rebass
  const {
    provider, title, style, nickname, instances, createdAt,
    accessLevel, machineCount, onClick, clones
  } = props.template

  const cloneCount = Object.keys(clones).length

  return (
    <Block flex align='center' onClick={onClick}
      className='TemplateDetailCard' style={style}>
      <TemplateMeta
        big
        title={title}
        provider={provider}
        nickname={nickname}
        accessLevel={accessLevel} />
      <TemplateStats
        cloneCount={cloneCount}
        machineCount={machineCount}
        createdAt={createdAt} />
    </Block>
  )
}

TemplateDetailCard.contextTypes = {
  rebass: PropTypes.object
}

TemplateDetailCard.propTypes = {
  title: PropTypes.string,
  machineCount: PropTypes.number,
  instances: PropTypes.object,
  clones: PropTypes.object,
  onClick: PropTypes.func,
  provider: PropTypes.string,
  accessLevel: PropTypes.string,
}

const noop = () => {}
TemplateDetailCard.defaultProps = {
  title: 'Stack title',
  instances: {},
  clones: {},
  onClick: noop,
  provider: '',
  accessLevel: 'private',

  style: {
    height: 120,
    borderBottom: '1px solid #E6E6E6',
    MozMacOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  }
}

export default TemplateDetailCard
