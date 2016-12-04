import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Dropdown, DropdownMenu, NavItem, Divider, Arrow } from 'rebass'

export default NavbarMenu = (props) ->

  { onOpen, onClose, nickname, isOpen } = props

  <Dropdown>
    <NavItem onClick={onOpen}>@{nickname}<Arrow /></NavItem>
    <DropdownMenu right onDismiss={onClose} open={isOpen}>
      <NavItem to='/profile' is={Link}>Profile</NavItem>
      <NavItem to='/dashboard' is={Link}>Dashboard</NavItem>
      <NavItem to='/credentials' is={Link}>Credentials</NavItem>
      <Divider m={0} />
      <NavItem to='/komponents' is={Link}>Komponent Demo</NavItem>
      <Divider m={0} />
      <NavItem to='/logout' is={Link}>Logout</NavItem>
    </DropdownMenu>
  </Dropdown>



