import React, { Component } from 'react'
import { assign } from 'lodash'
import kdTheme from 'style/kd'
import ThemeProvider from 'components/ThemeProvider'

export default class CoreLayout extends Component

  render: ->
    <ThemeProvider theme={kdTheme}>
      {@props.children}
    </ThemeProvider>
