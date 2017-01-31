import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { Input, Toolbar, Breadcrumbs } from 'rebass'

import BrandLogo from 'components/BrandLogo'
import NavbarMenu from 'components/NavbarMenu'
import Link from 'components/Link'
import Block from 'components/Block'
import Container from 'components/Container'

export default class Navbar extends Component

  constructor: (props) ->
    super props
    @state = { isMenuOpen: no }

  toggleMenu: (state) -> @setState { isMenuOpen: state }

  render: ->

    { account, location } = @props

    <Toolbar>
      <Container p={0} flex align='center'>

        <Block flex col={4}>
          <Link to='/'><BrandLogo size={20} /></Link>
          <Breadcrumbs m={0} ml={2}
            className='NavbarBreadcrumbs'
            links={extractLinks location} />
        </Block>

        <Block col={4} flex justify='center' align='center'>
          <SearchBox />
        </Block>

        <MenuOrLinks
          account={account}
          isOpen={@state.isMenuOpen}
          toggleMenu={@toggleMenu.bind this} />

      </Container>
    </Toolbar>


MenuOrLinks = ({ account, isOpen, toggleMenu }) ->

  if account
    <Block flex justify='flex-end' col={4}>
      <NavbarMenu
        isOpen={isOpen}
        onOpen={-> toggleMenu on}
        onClose={-> toggleMenu off}
        account={account} />
    </Block>
  else
    <Block flex justify='flex-end' col={4}>
      <Link px={3} to='/login'>LOGIN</Link>
      <Link px={3} to='/signup'>REGISTER</Link>
    </Block>


SearchBox = ->

  style =
    width: 500
    opacity: 0.5

  <Input
    m={0}
    hideLabel
    label='Search'
    name='search'
    placeholder='Search is not implemented yet'
    style={style} />


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
