import React, { Component, PropTypes } from 'react'
import { assign } from 'lodash'
import { Container } from 'rebass'
import Navbar from 'components/Navbar'

export default AppLayout = (props) ->
  <div style={{height: '100%', width: '100%'}}>
    <Navbar selected='dashboard' nickname='umut' />
    {props.children}
  </div>

