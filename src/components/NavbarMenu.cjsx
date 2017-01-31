import React, { PropTypes } from 'react'
import { Dropdown, DropdownMenu, NavItem, Divider, Arrow } from 'rebass'
import Link from 'components/Link'
import ProfileText from 'components/ProfileText'
import Avatar from 'components/Avatar'

export default NavbarMenu = (props) ->

  { onOpen, onClose, account, isOpen } = props

  return <span />  unless account

  { nickname } = account.profile

  <Dropdown>

    <NavItem onClick={onOpen}>
      <Avatar account={account} size={30} mr={1} style={border: '1px solid #fff'} />
      <ProfileText account={account} /><Arrow />
    </NavItem>

    <DropdownMenu right onDismiss={onClose} open={isOpen}>
      <NavItem to="/#{nickname}" is={Link}>Your Profile</NavItem>
      <NavItem to="/#{nickname}/settings" is={Link}>Settings</NavItem>
      <Divider m={0} />
      <NavItem to='/logout' is={Link}>Logout</NavItem>
    </DropdownMenu>

  </Dropdown>
