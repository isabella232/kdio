import React, { PropTypes } from 'react'
import { Dropdown, DropdownMenu, Divider, Arrow } from 'rebass'
import Link from 'components/Link'
import ProfileText from 'components/ProfileText'
import Avatar from 'components/Avatar'

const NavbarMenu = ({ onOpen, onClose, account, isOpen }) => {
  if (!account) {
    return <span />
  }

  const { nickname } = account.profile

  return (
    <Dropdown>

      <Link onClick={onOpen}>
        <Avatar
          account={account} size={30} mr={1}
          style={{ border: '1px solid #fff' }} />
        <ProfileText account={account} /><Arrow />
      </Link>

      <DropdownMenu right onDismiss={onClose} open={isOpen}>
        <Link to={`/${nickname}`}>Your Profile</Link>
        <Link to={`/${nickname}/settings`}>Settings</Link>
        <Divider m={0} />
        <Link to='/logout'>Logout</Link>
      </DropdownMenu>

    </Dropdown>
  )
}

export default NavbarMenu
