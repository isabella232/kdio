import React from 'react'
import { Toolbar, Space } from 'rebass'

import Block from 'components/Block'
import Container from 'components/Container'
import Link from 'components/Link'
import BrandLogo from 'components/BrandLogo'

const LandingNavbar = ({ color = 'white' }) => (
  <Toolbar backgroundColor='transparent'>
    <Container p={0} flex>
      <Link color={color} px={2} to='/'>
        <BrandLogo color={color} size={20} />
      </Link>
      <Space auto />
      <Link px={3} style={fontSize: 14} to='/docs'>DOCUMENTATION</Link>
      <Link px={3} style={fontSize: 14} to='https://github.com/koding/kdio'>GITHUB</Link>
      <Link px={3} style={fontSize: 14} activeStyle={display: 'none'} to='/login'>LOGIN</Link>
      <Link px={3} style={fontSize: 14} activeStyle={display: 'none'} to='/signup'>REGISTER</Link>
    </Container>
  </Toolbar>
)

export default LandingNavbar
