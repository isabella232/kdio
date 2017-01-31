import React, { PropTypes } from 'react'
import midnightTheme from 'style/theme.midnight'
import ThemeProvider from 'components/ThemeProvider'
import Block from 'components/Block'
import Particles from 'components/Particles'

export default ParticlesLayout = (props) ->

  <ThemeProvider theme={midnightTheme}>
    <ParticlesBackground />
    {props.children}
  </ThemeProvider>


ParticlesBackground = ->

  style =
    backgroundColor: '#080810'
    position: 'fixed'
    top: 0
    left: 0
    height: '100%'
    width: '100%'
    zIndex: -1

  <Block style={style}>
    <Particles />
  </Block>

ParticlesLayout.propTypes = { children: PropTypes.element.isRequired }
