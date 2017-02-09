import React from 'react'
import ReactParticles from 'react-particles-js'
import particlesConfig from 'assets/particles-config.json'

const Particles = (props) => {
  const {
    width = window.outerWidth,
    height = window.outherHeight,
    config = particlesConfig
  } = props

  return (
    <ReactParticles width={width} height={height} params={config} />
  )
}

export default Particles
