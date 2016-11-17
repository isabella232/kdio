import React, { Component, PropTypes } from 'react'
import { assign } from 'lodash'
import kdStyleConfig from './kd-style-config'

export default class CoreLayout extends Component

  @childContextTypes =
    rebass: PropTypes.object

  getChildContext: ->
    return {
      rebass: @state.styleConfig
    }

  constructor: (props) ->
    super props

    styleConfig = assign {}, kdStyleConfig, props.styleConfig
    @state = { styleConfig }

  getBaseStyle: ->
    { styleConfig } = @state
    return {
      fontFamily: styleConfig.fontFamily
      color: styleConfig.color
      backgroundColor: styleConfig.backgroundColor
    }

  render: ->
    <div className='CoreLayout' style={@getBaseStyle()}>
      {@props.children}
    </div>

CoreLayout.propTypes = { children: PropTypes.element.isRequired }
