import React from 'react'
import { Panel, PanelHeader } from 'rebass'
import CodeBlock from 'components/CodeBlock'


export default TemplateContent = ({ source }) ->

  <Panel>
    <PanelHeader children='Stack Template' />
    <CodeBlock language='yaml' children={source} />
  </Panel>

