import React from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'

import lightTheme from './theme/light'
import darkTheme from './theme/dark'

const ThemeProvider = ({ name, children }) => {

  if (name === 'light') {
    return <BaseThemeProvider theme={lightTheme} children={children} />
  }
  else if (name === 'dark') {
    return <BaseThemeProvider theme={darkTheme} children={children} />
  }

  throw new Error(`unknown theme, expected: 'light' or 'dark', got ${name}`)
}

export default ThemeProvider
