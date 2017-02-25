import React, { Component } from 'react'
import { Text } from 'rebass'
import { assign } from 'lodash'
import vmIcon from 'assets/vm-icon.svg'

import Block from 'components/Block'

const Header = () => {
  const style = {
    borderBottom:'1px solid #F0F0F0',
    color: '#727272',
    fontWeight: 300,
  }

  return (
    <Block py={2} style={style}>
      <Text children="Virtual Machines" style={{fontSize: 18}} />
    </Block>
  )
}

const VMIcon = ({ src }) => (
  <div style={{ height: 'auto', width: '16px' }}>
    <img src={src} style={{ width: '100%' }}/>
  </div>
)

const MachineListItem = ({ machine }) => (
  <Block flex pt={2}>
    <Block>
      <VMIcon src={vmIcon} />
    </Block>
    <Block auto ml={2}>
      <Text color='#515151' style={{fontWeight: 600, fontSize: 14}}>{machine.label}</Text>
    </Block>
  </Block>
)

class MachineList extends Component {
  renderMachines() {
    return this.props.machines.map((machine, index) => (
      <MachineListItem key={index} machine={machine} />
    ))
  }

  render() {
    const style = {
      width: 300,
      ...this.props.style
    }

    return (
      <Block mb={3} style={style}>
        <Header />
        {this.renderMachines()}
      </Block>
    )
  }
}

export default MachineList
