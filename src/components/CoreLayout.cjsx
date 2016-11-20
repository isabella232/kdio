import React, { Component, PropTypes } from 'react'
import { assign } from 'lodash'
import kdTheme from 'style/kd'
import ThemeProvider from 'components/ThemeProvider'

export default class CoreLayout extends Component

  render: ->
    <ThemeProvider theme={kdTheme}>
      {@props.children}
    </ThemeProvider>

CoreLayout.propTypes = { children: PropTypes.element.isRequired }
