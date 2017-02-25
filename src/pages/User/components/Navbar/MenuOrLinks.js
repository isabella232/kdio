import React from 'react'
import styled from 'styled-components'
import flexable from 'sparkle/style/flexable'

import Link from 'components/Link'
import NavbarMenu from 'components/NavbarMenu'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
`

const Menu = ({ account, isOpen, toggleMenu }) => (
  <Wrapper>
    <NavbarMenu
      isOpen={isOpen}
      onOpen={() => toggleMenu(true)}
      onClose={() => toggleMenu(false)}
      account={account} />
  </Wrapper>
)

const Links = () => (
  <Wrapper>
    <Link px={3} to='/login'>LOGIN</Link>
    <Link px={3} to='/signup'>REGISTER</Link>
  </Wrapper>
)

const MenuOrLinks = ({ account, isOpen, toggleMenu }) => (
  account
  ? <Menu account={account} isOpen={isOpen} toggleMenu={toggleMenu} />
  : <Links />
)

export default MenuOrLinks
