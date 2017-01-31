import React from 'react'

import Container from 'components/Container'
import TemplateDetailCard from 'components/TemplateDetailCard'
import TemplateDetail from 'components/TemplateDetail'
import MachineList from 'components/MachineList'
import TemplateCommands from 'components/TemplateCommands'
import Block from 'components/Block'


export default UserTemplate = (props) ->
  { template } = props

  return <span>Loading</span>  unless template

  <Block flex>
    <Block auto style={borderRight: '1px solid #E6E6E6'}>
      <TemplateDetail {...template} />
    </Block>
    <Block pl={3} pt={3}>
      <MachineList machines={template.machines} />
      <TemplateCommands template={template} />
    </Block>
  </Block>
