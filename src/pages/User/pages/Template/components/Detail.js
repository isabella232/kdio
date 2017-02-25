import React from 'react'
import { Divider } from 'rebass'

import Block from 'components/Block'
import TemplateContent from 'components/TemplateContent'
import TemplateReadme from 'components/TemplateReadme'

const TemplateDetail = ({ content, readme }) => (
  <Block py={3} pr={5}>
    <TemplateReadme source={readme} />
    <Divider />
    <TemplateContent source={content} />
  </Block>
)

export default TemplateDetail
