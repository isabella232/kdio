import React, { PropTypes, Component } from 'react'
import { Container } from 'rebass'
import ReactMarkdown from 'react-markdown'

import TemplateContent from 'components/TemplateContent'
import TemplateReadme from 'components/TemplateReadme'

propTypes =
  id: PropTypes.string
  content: PropTypes.string
  readme: PropTypes.string

export default TemplateDetail = (props) ->

  { content, readme } = props

  <div>
    <TemplateContent source={content} />
    <TemplateReadme source={readme} />
  </div>
