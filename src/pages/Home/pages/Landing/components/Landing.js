import React from 'react'
import { withRebass } from 'rebass'

import Block from 'components/Block'

import HomeNavbar from 'pages/Home/components/Navbar'

import LandingHeader from './Header'
import LandingContent from './Content'
import LandingHero from './Hero'
import LandingFooter from './Footer'


const Landing = (props) => (
  <Block style={{ position: 'relative' }}>
    <HomeNavbar />
    <LandingHeader />
    <LandingContent />
    <LandingHero />
    <LandingFooter />
  </Block>
)

export default withRebass(Landing)
