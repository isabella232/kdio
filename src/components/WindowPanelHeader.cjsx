import React from 'react'
import classnames from 'classnames'
import { withRebass } from 'rebass'
import { assign, omit } from 'lodash'

WindowPanelHeader = (props) ->

  { className, style, theme, subComponentStyles, title } = props
  { bold, scale, borderRadius } = theme

  cx = classnames('WindowPanelHeader', className)

  sx =
    position: 'relative'
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    fontWeight: bold,
    padding: scale[1] / 1.5,
    borderRadius: "#{borderRadius}px #{borderRadius}px 0 0",
    background: "#f2f2f2"

  titleSx =
    flex: '1 auto'
    textAlign: 'center'
    color: '#727272'
    fontSize: scale[1] * 1.5
    fontWeight: 200

  <div className={cx} style={assign {}, sx, style.fill, style}>
    <Dots theme={theme} />
    <span style={titleSx}>{title}</span>
  </div>


Dots = ({ theme }) ->
  scale = theme.scale[1] * 1.5
  sx =
    base:
      display: 'flex'
      width: scale * 3 + scale * 2
      justifyContent: 'space-between'
      position: 'absolute'
      left: 4
    dot: (color) ->
      width: scale
      height: scale
      margin: 'auto'
      backgroundColor: color
      borderRadius: 99999


  <div style={sx.base}>
    <div style={sx.dot '#E96E4C'} />
    <div style={sx.dot '#E6A935'} />
    <div style={sx.dot '#85C33D'} />
  </div>

WindowPanelHeader._name = 'WindowPanelHeader'

export default withRebass WindowPanelHeader
