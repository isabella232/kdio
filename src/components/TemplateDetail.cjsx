import React, { PropTypes } from 'react'
import { Divider } from 'rebass'

import Block from 'components/Block'
import TemplateContent from 'components/TemplateContent'
import TemplateReadme from 'components/TemplateReadme'

propTypes =
  id: PropTypes.string
  content: PropTypes.string
  readme: PropTypes.string

export default TemplateDetail = (props) ->

  { content, readme } = props

  <Block py={3} pr={5}>
    <TemplateReadme source={readme} />
    <Divider />
    <TemplateContent source={content} />
  </Block>
