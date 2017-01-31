import React from 'react'

import ReactParticles from 'react-particles-js'
import particlesConfig from 'assets/particles-config.json'

export default Particles = (props) ->

  { width = window.outerWidth
    height = window.outerHeight
    config = particlesConfig } = props

  <ReactParticles
    width={width}
    height={height}
    params={config} />
