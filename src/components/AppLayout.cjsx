import React, { Component, PropTypes } from 'react'
import { assign } from 'lodash'
import { Fixed } from 'rebass'
import Navbar from 'components/Navbar'

export default AppLayout = (props) ->
  <div style={{height: '100%', width: '100%'}}>
    <Navbar location={props.location} nickname='umut' />
    <div style={paddingTop: 15}>
      {props.children}
    </div>
  </div>

