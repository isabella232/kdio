import React from 'react'
import { Heading } from 'rebass'
import ReactMarkdown from 'react-markdown'

import Block from 'components/Block'

const TemplateReadme = ({ source }) => (
  <Block>
    <Heading level={1} children='Readme' color='#F57689' />
    <ReactMarkdown source={source} />
  </Block>
)

export default TemplateReadme
