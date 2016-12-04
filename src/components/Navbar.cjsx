import React, { PropTypes, Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Container as BaseContainer, NavItem, Space, Toolbar, Breadcrumbs } from 'rebass'
import { withReflex } from 'reflexbox'

Container = withReflex()(BaseContainer)

import BrandLogo from 'components/BrandLogo'
import NavbarMenu from 'components/NavbarMenu'

export default class Navbar extends Component

  constructor: (props) ->
    super props
    @state = { isMenuOpen: no }

  toggleMenu: (state) -> @setState { isMenuOpen: state }

  render: ->
    <Toolbar>
      <Container p={0} flex align='center'>
        <NavItem to='/' is={Link}><BrandLogo /></NavItem>
        <Breadcrumbs m={0} ml={2}
          className='NavbarBreadcrumbs'
          links={extractLinks @props.location} />
        <Space auto />
        <NavbarMenu
          isOpen={@state.isMenuOpen}
          onOpen={@toggleMenu.bind this, on}
          onClose={@toggleMenu.bind this, off}
          nickname={@props.nickname}
        />
      </Container>
    </Toolbar>


# TODO(umut): this is so hardcoded right now. needs to be generalized.
extractLinks = (location) ->
  [username, templateId] = location.pathname.split('/').filter(Boolean)

  links = [ createLinkProps "/#{username}", "/#{username}" ]

  if templateId
    templateLink = createLinkProps "#{templateId}", "/#{username}/#{templateId}"
    links = links.concat [templateLink]

  return links

createLinkProps = (children, href) ->
  return {
    children
    href
    onClick: (event) ->
      event.preventDefault()
      browserHistory.push href
  }
