import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Dropdown, DropdownMenu, Divider, Arrow } from 'rebass'
import Link from 'components/Link'
import ProfileText from 'components/ProfileText'
import Avatar from 'components/Avatar'

const RowLink = styled(Link)`
  padding: 0 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${p => p.theme.colors.gray1};
  line-height: 40px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #fff !important;
    background: ${p => p.theme.colors.blue}
  }
`

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
        <RowLink to={`/${nickname}`}>Your Profile</RowLink>
        <RowLink to={`/${nickname}/settings`}>Settings</RowLink>
        <RowLink to={`/${nickname}/credentials`}>Credentials</RowLink>
        <RowLink to='/logout'>Logout</RowLink>
      </DropdownMenu>

    </Dropdown>
  )
}

export default NavbarMenu
