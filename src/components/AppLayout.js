import React from 'react'
import Navbar from 'containers/Navbar'
import Block from 'components/Block'
import Container from 'components/Container'

const AppLayout = (props) => {
  const headerStyle = {
    borderBottom: '1px solid #E6E6E6',
    backgroundColor: '#f5f5f5'
  }

  return (
    <div style={{height: '100%', width: '100%'}}>
      <Navbar location={props.location} />
      <Block style={headerStyle}>
        <Container py={4}>{props.header}</Container>
      </Block>
      <Block>
        <Container>{props.main}</Container>
      </Block>
    </div>
  )
}

export default AppLayout
