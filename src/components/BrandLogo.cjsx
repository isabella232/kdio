import React from 'react'
import logo from 'assets/kdio-logo.svg'

export default BrandLogo = ({ size = 32 }) ->

  <div style={height: size, width: 'auto'}>
    <img src={logo} style={{height: '100%'}} />
  </div>

