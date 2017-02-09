import React, { Component } from 'react'
import { assign } from 'lodash'
import kdTheme from 'style/kd'
import ThemeProvider from 'components/ThemeProvider'

const CoreLayout = ({ children }) => {
  return (
    <ThemeProvider theme={kdTheme}>
      {children}
    </ThemeProvider>
  )
}

export default CoreLayout
