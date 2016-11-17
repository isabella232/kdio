import React, { Component } from 'react'
import logo from './logo.svg'
import './Dashboard.css'

import { Link } from 'react-router'

class Dashboard extends Component
  render: ->
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <Link to='/login'>Login</Link>
        <Link to='/umut'>Profile</Link>
      </p>
    </div>

export default Dashboard

