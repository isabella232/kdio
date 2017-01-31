import React from 'react'
import { NavItem, Toolbar, Space } from 'rebass'

import Link from 'components/Link'
import Button from 'components/Button'
import Block from 'components/Block'
import Container from 'components/Container'
import BrandLogo from 'components/BrandLogo'
import KodingLogo from 'components/KodingLogo'


export default LandingFooter = (props) ->

  { color = '#727272' } = props

  <Toolbar backgroundColor='white'>
    <Container p={0} flex align='center'>

      <NavItem color={color} px={2} to='/' is={Link}>
        <BrandLogo color={color} size={20} />
      </NavItem>

      <NavItem color={color} px={3} to='/docs' is={Link}>DOCUMENTATION</NavItem>
      <NavItem color={color} px={3} to='https://github.com/koding/kdio' is={Link}>GITHUB</NavItem>

      <Space auto />

      <NavItem color={color} px={3} href='https://koding.com' >
        <KodingLogo />
      </NavItem>

    </Container>
  </Toolbar>
