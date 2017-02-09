import React, { Component, PropTypes } from 'react'
import { omit } from 'lodash'

class ThemeProvider extends Component {
  getChildContext() {
    return {
      rebass: this.props.theme
    }
  }

  render() {
    return (
      <div {...omit(this.props, 'theme')} />
    )
  }
}

ThemeProvider.defaultProps = { theme: {} }
ThemeProvider.propTypes = { theme: PropTypes.object }
ThemeProvider.childContextTypes = { rebass: PropTypes.object }

export default ThemeProvider
