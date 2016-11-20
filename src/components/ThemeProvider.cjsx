import { omit } from 'lodash'
import React, { Component, PropTypes } from 'react'

export default class ThemeProvider extends Component

  getChildContext: -> { rebass: @props.theme }

  render: -> <div {...omit @props, 'theme'} />


ThemeProvider.defaultProps = { theme: {} }
ThemeProvider.propTypes = { theme: PropTypes.object }
ThemeProvider.childContextTypes = { rebass: PropTypes.object }

