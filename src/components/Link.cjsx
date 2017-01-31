import React from 'react'
import { NavItem } from 'rebass'
import { Link as RouterLink } from 'react-router'

export default Link = (props) ->

  <NavItem is={RouterLink} {...props} />
