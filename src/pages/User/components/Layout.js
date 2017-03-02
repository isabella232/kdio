import React from 'react'
import Block from 'components/Block'
import Container from 'components/Container'

import styled from 'styled-components'
import ThemeProvider from 'sparkle/ThemeProvider'

import NavbarContainer from './Navbar'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const UserPageLayout = ({ children }) => {
  return (
    <ThemeProvider name='light'>
      <Wrapper>
        <ThemeProvider name='dark'>
          <NavbarContainer />
        </ThemeProvider>
        <Block>{children}</Block>
      </Wrapper>
    </ThemeProvider>
  )
}

export default UserPageLayout
