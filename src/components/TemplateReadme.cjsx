import React from 'react'
import { Panel, PanelHeader } from 'rebass'
import ReactMarkdown from 'react-markdown'

export default TemplateReadme = (props) ->

  { source } = props

  <Panel>
    <PanelHeader children='Readme' />
    <ReactMarkdown source={source} />
  </Panel>


