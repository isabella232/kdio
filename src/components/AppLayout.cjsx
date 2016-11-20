import React, { Component, PropTypes } from 'react'
import { assign } from 'lodash'
import { Fixed } from 'rebass'
import Navbar from 'components/Navbar'

export default AppLayout = (props) ->
  <div style={{height: '100%', width: '100%'}}>
    <Fixed top left right zIndex={1}>
      <Navbar selected='dashboard' nickname='umut' />
    </Fixed>
    {props.children}
  </div>

