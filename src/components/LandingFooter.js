import React from 'react'
import { Toolbar, Space } from 'rebass'

import Link from 'components/Link'
import Button from 'components/Button'
import Block from 'components/Block'
import Container from 'components/Container'
import BrandLogo from 'components/BrandLogo'
import KodingLogo from 'components/KodingLogo'


const LandingFooter = ({ color = '#727272' }) => (
  <Toolbar backgroundColor='white'>
    <Container p={0} flex align='center'>

      <Link color={color} px={2} to='/'>
        <BrandLogo color={color} size={20} />
      </Link>

      <Link color={color} px={3} to='/docs'>DOCUMENTATION</Link>
      <Link color={color} px={3} to='https://github.com/koding/kdio'>GITHUB</Link>

      <Space auto />

      <Link color={color} px={3} href='https://koding.com' >
        <KodingLogo />
      </Link>

    </Container>
  </Toolbar>
)

export default LandingFooter
