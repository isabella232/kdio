import React from 'react'
import Container from 'components/Container'
import Block from 'components/Block'

import MachineList from './MachineList'
import TemplateDetail from './Detail'
import Snippets from './Snippets'

const UserTemplate = ({ template }) => {

  if (!template) {
    return <span>Loading</span>
  }

  return (
    <Block flex>
      <Block auto style={{borderRight: '1px solid #E6E6E6'}}>
        <TemplateDetail {...template} />
      </Block>
      <Block pl={3} pt={3}>
        <MachineList machines={template.machines} />
        <Snippets template={template} />
      </Block>
    </Block>
  )
}

export default UserTemplate
