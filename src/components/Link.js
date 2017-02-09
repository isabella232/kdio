import React from 'react'
import { NavItem } from 'rebass'
import { Link as RouterLink } from 'react-router'

const Link = (props) => (
  <NavItem is={RouterLink} {...props} />
)

export default Link
