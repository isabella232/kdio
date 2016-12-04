import React, { Component, PropTypes } from 'react'
import { v4 as generateId } from 'node-uuid'
import { assign } from 'lodash'

import hterm from 'utils/hterm'
import getColorList from 'utils/get-color-list'
import getTheme from 'utils/get-hterm-theme'

propTypes =
  fontFamily: PropTypes.string
  fontSize: PropTypes.number
  backgroundColor: PropTypes.string
  cursorColor: PropTypes.string
  color: PropTypes.string
  theme: PropTypes.object


export default class Terminal extends Component

  constructor: (props) ->
    super props

    @_id = props._id or generateId()
    @hterm = null
    @wrapperRef = null
    @htermRef = null


  componentDidMount: ->

    term = @props.hterm ? new hterm.Terminal(@_id)

    { onData, onTerminal, theme = {} } = @props

    colors = assign {}, getTheme('default').colors, theme.colors
    theme = assign {}, getTheme('default'), theme, { colors }

    term.onTerminalReady = ->
      term.vt.setANSIMode '20', true
      # term.vt.enable8BitControl = true
      onTerminal? term

    term.decorate @htermRef
    term.installKeyboard()

    @hterm = term

    prefs = term.getPrefs()

    prefs.set 'font-family', theme.fontFamily
    prefs.set 'font-size', theme.fontSize
    prefs.set 'font-smoothing', theme.fontSmoothing
    prefs.set 'cursor-color', theme.cursorColor
    prefs.set 'enable-clipboard-notice', false
    prefs.set 'foreground-color', theme.foregroundColor

    prefs.set 'background-color', theme.backgroundColor
    prefs.set 'color-palette-overrides', getColorList(theme.colors or {})
    prefs.set 'scrollbar-visible', false
    prefs.set 'receive-encoding', 'raw'
    prefs.set 'send-encoding', 'raw'
    prefs.set 'alt-sends-what', 'browser-key'


  render: ->

    wrapperStyle =
      width: @props.width
      height: @props.height

    htermStyle =
      position: 'relative'
      width: '100%'
      height: '100%'

    <div ref={(ref) => @wrapperRef = ref} style={wrapperStyle}>
      <div ref={(ref) => @htermRef = ref} style={htermStyle} />
    </div>


Terminal.defaultProps =
  width: '100%'
  height: 400
  onData: (data) -> data
