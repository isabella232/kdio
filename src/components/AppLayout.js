import React from 'react'
import Navbar from 'containers/Navbar'
import Block from 'components/Block'
import Container from 'components/Container'

import styled from 'styled-components'
import ThemeProvider from 'sparkle/ThemeProvider'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const AppLayout = (props) => {
  const headerStyle = {
    borderBottom: '1px solid #E6E6E6',
    backgroundColor: '#f5f5f5'
  }

  return (
    <ThemeProvider name='light'>
      <Wrapper>
        <ThemeProvider name='dark'>
          <Navbar />
        </ThemeProvider>
        <Block style={headerStyle}>
          <Container py={4}>{props.header}</Container>
        </Block>
        <Block>
          <Container>{props.main}</Container>
        </Block>
      </Wrapper>
    </ThemeProvider>
  )
}

export default AppLayout
