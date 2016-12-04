import React from 'react'
import classnames from 'classnames'
import { withRebass } from 'rebass'
import { assign, omit } from 'lodash'

WindowPanelHeader = (props) ->

  { className, style, theme, subComponentStyles, title } = props
  { bold, scale, borderRadius } = theme

  cx = classnames('WindowPanelHeader', className)

  gradient =
    from: '#ddd'
    to: '#ccc'

  sx =
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    fontWeight: bold,
    padding: scale[1],
    borderRadius: "#{borderRadius}px #{borderRadius}px 0 0",
    background: "linear-gradient(to bottom, #{gradient.from} 0%, #{gradient.to} 100%)"

  titleSx =
    flex: '1 auto'
    textAlign: 'center'

  <div className={cx} style={assign {}, sx, style.fill, style}>
    <Dots theme={theme} />
    <span style={titleSx}>{title}</span>
  </div>


Dots = ({ theme }) ->
  sx =
    base:
      display: 'flex'
      width: theme.scale[1] * 3 + theme.scale[1] * 2
      justifyContent: 'space-between'
    dot: (color) ->
      width: theme.scale[1]
      height: theme.scale[1]
      margin: 'auto'
      backgroundColor: color
      borderRadius: 99999


  <div style={sx.base}>
    <div style={sx.dot 'red'} />
    <div style={sx.dot 'orange'} />
    <div style={sx.dot 'green'} />
  </div>

WindowPanelHeader._name = 'WindowPanelHeader'

export default withRebass WindowPanelHeader
