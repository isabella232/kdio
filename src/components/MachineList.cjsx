import React, { Component } from 'react'
import { Text } from 'rebass'
import { assign } from 'lodash'
import vmIcon from 'assets/vm-icon.svg'

import Block from 'components/Block'


class MachineList extends Component

  renderMachines: ->
    @props.machines.map (machine, index) ->
      <MachineListItem key={index} machine={machine} />

  render: ->

    style = assign {
      width: 300
    }, @props.style

    <Block mb={2} style={style}>
      <Header />
      {@renderMachines()}
    </Block>

Header = ->

  style =
    borderBottom:'1px solid #F0F0F0'
    color: '#727272'
    fontSize: 18
    fontWeight: 400

  <Block py={2} style={style}>
    <Text children="Virtual Machines" />
  </Block>


MachineListItem = ({ machine }) ->

  <Block flex pt={2}>
    <Block>
      <VMIcon src={vmIcon} />
    </Block>
    <Block auto ml={2}>
      <Text color='#515151'>{machine.label}</Text>
    </Block>
  </Block>


VMIcon = ({ src }) ->

  <div style={{height: 'auto', width: '16px'}}>
    <img src={src} style={{width: '100%'}}/>
  </div>


export default MachineList
