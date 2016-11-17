import React, { PropTypes, Component } from 'react'
import {
  Arrow, Dropdown, DropdownMenu, Fixed,
  NavItem, Space, Toolbar, Divider
} from 'rebass'

import { Link } from 'react-router'

export default class Navbar extends Component

  @propTypes =
    selected: PropTypes.string.isRequired

  constructor: (props) ->
    super props
    @state = { isMenuOpen: no }

  toggleMenu: (state) -> @setState { isMenuOpen: state }

  getMenuItems: ->
    return [
      { name: 'Dashboard', href: '/dashboard' }
      { name: 'Logout', href: '/logout' }
    ]

  render: ->
    <Fixed top left right zIndex={1}>
      <Toolbar>
        <NavItem to='/' is={Link}>kd.io</NavItem>
        <Space auto />
        <Dropdown>
          <NavItem onClick={=> @toggleMenu on}>@{@props.nickname}<Arrow /></NavItem>
          <DropdownMenu right onDismiss={=> @toggleMenu off} open={@state.isMenuOpen}>
            <NavItem to='/profile' is={Link}>Profile</NavItem>
            <NavItem to='/dashboard' is={Link}>Dashboard</NavItem>
            <NavItem to='/credentials' is={Link}>Credentials</NavItem>
            <Divider m={0} />
            <NavItem to='/logout' is={Link}>Logout</NavItem>
          </DropdownMenu>
        </Dropdown>
      </Toolbar>
    </Fixed>

