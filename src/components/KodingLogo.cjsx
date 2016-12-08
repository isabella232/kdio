import React from 'react'
import kodingLogo from 'assets/koding.svg'
import { Flex } from 'reflexbox'

export default KodingLogo = ({ height = 32 }) ->

  <Flex align='center' style={height: height, width: 'auto'}>
    <div style={marginTop: -2}>a</div>
    <img src={kodingLogo} style={{height: '100%', padding: '0 10px', marginTop: -4}} />
    project
  </Flex>


