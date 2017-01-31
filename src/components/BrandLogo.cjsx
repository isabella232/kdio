import React from 'react'
import logo from 'assets/kdio-logo.svg'

export default BrandLogo = ({ size = 32, color = '#fff' }) ->

  style = { height: '100%' }

  <div style={height: size, width: 'auto'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.4 13.7" style={style}>
      <path d="M8.6 0L5.2.3l3 6.6-3 6.3 3.5.3 3-7-3-6.7" fill={color} />
      <ellipse cx="1.6" cy="10.9" fill={color} rx="1.6" ry="1.7" />
      <ellipse cx="1.6" cy="5.4" fill={color} rx="1.6" ry="1.7" />
      <path d="M14.2 10.7h9.2V13h-9.2z" fill={color} />
    </svg>
  </div>
