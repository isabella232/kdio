import React, { Component, PropTypes } from 'react'
import { v4 as generateId } from 'node-uuid'
import { assign } from 'lodash'

import hterm from 'utils/hterm'
import getColorList from 'utils/get-color-list'
import getTheme from 'utils/get-hterm-theme'

class Terminal extends Component {

  constructor(props) {
    super(props)

    this._id = props._id || generateId()
    this.hterm = null
    this.wrapperRef = null
    this.htermRef = null
  }

  componentDidMount() {

    const term = this.props.hterm ? new hterm.Terminal(this._id) : null
    const { onData, onTerminal, theme = {} } = this.props
    const colors = assign({}, getTheme('default').colors, theme.colors)
    const theme = assign({}, getTheme('default'), theme, { colors })

    term.onTerminalReady = () => {
      term.vt.setANSIMode('20', true)
      onTerminal && onTerminal(term)
    }

    term.decorate this.htermRef
    term.installKeyboard()

    this.hterm = term

    prefs = term.getPrefs()

    prefs.set('font-family', theme.fontFamily)
    prefs.set('font-size', theme.fontSize)
    prefs.set('font-smoothing', theme.fontSmoothing)
    prefs.set('cursor-color', theme.cursorColor)
    prefs.set('enable-clipboard-notice', false)
    prefs.set('foreground-color', theme.foregroundColor)
    prefs.set('background-color', theme.backgroundColor)
    prefs.set('color-palette-overrides', getColorList(theme.colors || {}))
    prefs.set('scrollbar-visible', false)
    prefs.set('receive-encoding', 'raw')
    prefs.set('send-encoding', 'raw')
    prefs.set('alt-sends-what', 'browser-key')

  }

  render() {
    const wrapperStyle = {
      width: this.props.width,
      height: this.props.height
    }

    const htermStyle = {
      position: 'relative',
      width: '100%',
      height: '100%',
    }

    return (
      <div ref={ref => this.wrapperRef = ref} style={wrapperStyle}>
        <div ref={ref => this.htermRef = ref} style={htermStyle} />
      </div>
    )
  }
}

Terminal.defaultProps = {
  width: '100%',
  height: 400,
  onData: data => data
}

export default Terminal
