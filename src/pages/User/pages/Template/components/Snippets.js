import React from 'react'
import { Text, Pre } from 'rebass'
import { assign } from 'lodash'

import Block from 'components/Block'
import Snippet from 'components/Snippet'

const Header = () => {
  const style = {
    borderBottom:'1px solid #F0F0F0',
    color: '#727272',
    fontWeight: 300,
  }

  return (
    <Block py={2} mb={2} style={style}>
      <Text children="Commands" style={{fontSize: 18}} />
    </Block>
  )
}

const SnippetDescription = ({ command, description }) => {

  const textStyle = {
    fontWeight: 300,
    fontSize: 14,
    color: '#515151'
  }

  return (
    <Block>
      <Text style={textStyle}>{description}</Text>
      <Snippet>{command}</Snippet>
    </Block>
  )
}

const TemplateCloneSnippet = ({ slug }) => (
  <SnippetDescription
    command={`kd template clone ${slug}`}
    description='Clone this template to your account' />
)

const StackBuildSnippet = ({ slug }) => (
  <SnippetDescription
    command={`kd stack build ${slug}`}
    description='Build this template' />
)

const TemplateSnippets = ({ template, style, slug = 'foo/bar' }) => {
  style = {
    width: 300, fontSize: 14,
    ...style
  }

  return (
    <Block mb={4} style={style}>
      <Header />
      <TemplateCloneSnippet slug={slug} />
      <StackBuildSnippet slug={slug} />
    </Block>
  )
}

export default TemplateSnippets
