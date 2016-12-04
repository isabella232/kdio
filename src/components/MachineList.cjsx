import React, { Component } from 'react'
import { Stat, Text, Block as BaseBlock, Badge, withRebass } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import { Icon } from 'reline'
import { assign } from 'lodash'
import vmIcon from 'assets/vm-icon.svg'
import getMachineSpecs from 'utils/get-machine-specs'

Block = withReflex()(BaseBlock)

class MachineList extends Component

  constructor: (props) ->

    super props

    @state = { activeIndex: 0 }

  machineOnClick: (index) ->
    if @state.activeIndex is index
    then @setState { activeIndex: null }
    else @setState { activeIndex: index }

  renderMachines: ->
    { machines } = @props

    for machine, index in machines
      <MachineListItem
        key={index}
        machine={machine}
        index={index}
        length={machines.length}
        isOpen={index is @state.activeIndex}
        onClick={@machineOnClick.bind this, index}
      />

  render: ->

    style = assign {
      width: 300
      backgroundColor: 'white'
    }, @props.style

    <Block style={style}>
      <Header />
      {@renderMachines()}
    </Block>

Header = ->

  style =
    borderBottom:'1px solid #F0F0F0'
    borderTop:'1px solid #F0F0F0'
    backgroundColor: '#FBFBFB'
    color: '#727272'

  <Block p={2} style={style}>
    <Text children="Virtual Machines" />
  </Block>


MachineListItem = ({ machine, onClick, isOpen, length, index }) ->

  style = { borderBottom: '1px solid #F0F0F0' }
  style = null  if index + 1 is length

  <Block style={style}>
    <Flex py={2} onClick={onClick} style={cursor: 'pointer'}>
      <Box ml={2}>
        <VMIcon src={vmIcon} />
      </Box>
      <Box auto ml={2}>
        <Text color='#515151'>{machine.label}</Text>
      </Box>
      <Box mr={2}>
        <VMDetailIcon isOpen={isOpen} />
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

  { ram, cpu } = getMachineSpecs provider, instance_type

  style =
    borderTop: '1px solid #EFEFEF'
    backgroundColor: '#FBFBFB'

  <Block pl={2} py={2} style={style}>
    <Flex wrap>
      <Pill children={"#{provider}:#{instance_type}"} />
      <Pill children={cpu} />
      <Pill children={ram} />
    </Flex>
  </Block>

Pill = ({ children }) ->

  style =
    borderRadius: 99999
    border: '1px solid #ccc'
    backgroundColor: 'rgba(204, 204, 204, 0.1)'
    padding: '4px 8px'
    fontSize: 14
    color: '#727272'

  <Text mb={1} mr={1} style={style}>
    {children}
  </Text>

export default MachineList
