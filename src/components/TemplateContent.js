import React from 'react'
import { Heading } from 'rebass'
import CodeBlock from 'components/CodeBlock'

import Block from 'components/Block'

const TemplateContent = ({ source }) => {
  const style = { border: '1px solid #e6e6e6', fontSize: 12, borderRadius: 4 }

  return (
    <Block>
      <Heading level={1} children='Stack Template' color='#F57689' mb={2} />
      <Block backgroundColor='#fdfdfd' p={2} style={style}>
        <CodeBlock language='yaml' children={source} />
      </Block>
    </Block>
  )
}

export default TemplateContent
