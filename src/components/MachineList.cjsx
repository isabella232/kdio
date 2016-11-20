import React, { Component } from 'react'
import { Stat, Heading, Text, Block as BaseBlock, Badge, withRebass } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import { Icon } from 'reline'
import { map, clone } from 'lodash'
import vmIcon from 'assets/vm-icon.svg'
import getMachineSpecs from 'utils/get-machine-specs'

Block = withReflex()(BaseBlock)

class MachineList extends Component

  @defaultProps =
    style:
      width: 300
      height: 'auto'
      overflow: 'hidden'
      MozMacOsxFontSmoothing: 'grayscale'
      WebkitFontSmoothing: 'antialiased'
      backgroundColor: 'white'
      border: '1px solid #F0F0F0 !important'

  constructor: (props) ->

    super props

    @state =
      initials: @initialVisibility props.machines.length


  initialVisibility: (length) ->
    [0..length-1].fill no


  machineOnClick: (key) ->
    initials = @initialVisibility @state.initials.length
    initials[key] = not @state.initials[key]
    @setState { initials }


  render: ->

    { style, machines } = @props
    length = machines.length

    <Block rounded style={style}>
      {for m, i in machines
        <MachineListItem key={i} machine={m}
          index={i} length={length} isOpen={@state.initials[i]}
          onClick={@machineOnClick.bind(this, i)}/>}
    </Block>


MachineListItem = ({ machine, onClick, isOpen, length, index }) ->

  style = { borderBottom: '1px solid #F0F0F0' }
  style = null  if index + 1 is length

  <Block py={2} style={style}>
    <Flex>
      <Box ml={2}>
        <VMIcon src={vmIcon} />
      </Box>
      <Box auto ml={2}>
        <Text>{machine.label}</Text>
      </Box>
      <Box mr={2}>
        <VMDetailIcon isOpen={isOpen} onClick={onClick} />
      </Box>
    </Flex>
    <MachineSpecs isOpen={isOpen} machine={machine} />
  </Block>


VMIcon = ({ src }) ->

  <div style={{height: 'auto', width: '16px'}}>
    <img src={src} style={{width: '100%'}}/>
  </div>

VMDetailIcon = ({ isOpen, onClick }) ->

  if isOpen
  then <Icon name='chevron' up onClick={onClick} />
  else <Icon name='chevron' down onClick={onClick} />


MachineSpecs = ({ isOpen, machine }) ->

  return <span />  unless isOpen

  { instance_type, provider, specs } = machine

  { ram, cpu } = getMachineSpecs instance_type, provider

  style =
    borderTop: '1px solid #EFEFEF'
    borderBottom: '1px solid #EFEFEF'
    backgroundColor: '#FBFBFB'

  <Block mt={2} pl={2} py={2} style={style}>
    <Flex >
      <Text small mr={1}> {provider} </Text>
      <span style={{fontSize: '12px'}}>/</span>
      <Text small mx={1}> {instance_type} </Text>
      <span style={{fontSize: '12px'}}>/</span>
      <Text small mx={1}> {cpu} </Text>
      <span style={{fontSize: '12px'}}>/</span>
      <Text small ml={1}> {ram} </Text>
    </Flex>
  </Block>

export default MachineList
