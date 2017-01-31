import React from 'react'
import { Text, Pre } from 'rebass'
import { assign } from 'lodash'

import Block from 'components/Block'


export default TemplateCommands = ({ template, style }) ->

  slug = "foo/bar"

  style = assign { width: 300, fontSize: 14 }, style

  <Block mb={2} style={style}>
    <Header />
    <TemplateCloneCommand slug={slug} />
    <StackBuildCommand slug={slug} />
  </Block>


Header = ->

  style =
    borderBottom:'1px solid #F0F0F0'
    color: '#727272'
    fontSize: 18
    fontWeight: 400

  <Block py={2} mb={2} style={style}>
    <Text children="Commands" />
  </Block>


TemplateCloneCommand = ({ slug }) ->

  <Block>
    <Text>Clone this template to your account</Text>
    <Pre p={1} mt={2} backgroundColor="#F9F9F9" color="#434343">
      :❯ kd template clone {slug}
    </Pre>
  </Block>


StackBuildCommand = ({ slug }) ->
  <Block>
    <Text>Build this template</Text>
    <Pre p={1} mt={2} backgroundColor="#F9F9F9" color="#434343">
      :❯ kd stack build {slug}
    </Pre>
  </Block>
