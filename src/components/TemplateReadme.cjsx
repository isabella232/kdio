import React from 'react'
import { Heading } from 'rebass'
import ReactMarkdown from 'react-markdown'

import Block from 'components/Block'


export default TemplateReadme = (props) ->

  { source } = props

  <Block>
    <Heading level={1} children='Readme' color='#F57689' />
    <ReactMarkdown source={source} />
  </Block>
