import React from 'react'
import classnames from 'classnames'
import { Panel, withRebass } from 'rebass'
import { assign, omit } from 'lodash'
import WindowPanelHeader from './WindowPanelHeader'

WindowPanel = (props) ->

  { className, style, theme, subComponentStyles, title } = props
  { colors, scale, borderRadius } = theme

  cx = classnames('WindowPanel', className)

  gradient =
    from: '#ddd'
    to: '#ccc'

  sx =
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: "#{borderRadius + 1}px #{borderRadius + 1}px 0 0",
    borderColor: gradient.from
    backgroundColor: colors.white
    boxSizing: 'border-box'

  <div className={cx} style={assign {}, sx, style}>
    <WindowPanelHeader title={title} />
    {props.children}
  </div>

WindowPanel._name = 'WindowPanel'

export default withRebass WindowPanel
