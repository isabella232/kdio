import React, { PropTypes } from 'react'
import midnightTheme from 'style/theme.midnight'
import ThemeProvider from 'components/ThemeProvider'
import Block from 'components/Block'
import Particles from 'components/Particles'

const ParticlesBackground = () => {
  const style = {
    backgroundColor: '#080810',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
  }

  return (
    <Block style={style}>
      <Particles />
    </Block>
  )
}

const ParticlesLayout = ({ children }) => (
  <ThemeProvider theme={midnightTheme}>
    <ParticlesBackground />
    {children}
  </ThemeProvider>
)

ParticlesLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default ParticlesLayout
