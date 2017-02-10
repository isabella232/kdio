import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { Input, Toolbar, Breadcrumbs } from 'rebass'

import BrandLogo from 'components/BrandLogo'
import NavbarMenu from 'components/NavbarMenu'
import Link from 'components/Link'
import Block from 'components/Block'
import Container from 'components/Container'

const createLinkProps = (children, href) => ({
  children,
  href,
  onClick(event) {
    event.preventDefault()
    browserHistory.push(href)
  }
})

const extractLinks = (location) => {
  const [username, templateId] = location.pathname.split('/').filter(Boolean)
  let links = [createLinkProps(`/${username}`, `/${username}`)]

  if (templateId) {
    const templateLink = createLinkProps(templateId, `/${username}/${templateId}`)
    links = links.concat([templateLink])
  }

  return links
}

const MenuOrLinks = ({ account, isOpen, toggleMenu }) => {
  if (account) {
    return (
      <Block flex justify='flex-end' col={4}>
        <NavbarMenu
          isOpen={isOpen}
          onOpen={() => toggleMenu(true)}
          onClose={() => toggleMenu(false)}
          account={account} />
      </Block>
    )
  }
  else {
    return (
      <Block flex justify='flex-end' col={4}>
        <Link px={3} to='/login'>LOGIN</Link>
        <Link px={3} to='/signup'>REGISTER</Link>
      </Block>
    )
  }
}

const SearchBox = ({ style = { width: 500, opacity: 0.5 } }) => (
  <Input
    m={0}
    hideLabel
    label='Search'
    name='search'
    placeholder='Search is not implemented yet'
    style={style} />
)

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }

  toggleMenu(state) {
    this.setState({ isMenuOpen: state })
  }

  render() {
    const { account, location } = this.props

    return (
      <Toolbar>
        <Container p={0} flex align='center'>

          <Block flex col={4}>
            <Link to='/'><BrandLogo size={20} /></Link>
            <Breadcrumbs m={0} ml={2}
              className='NavbarBreadcrumbs'
              links={extractLinks(location)} />
          </Block>

          <Block col={4} flex justify='center' align='center'>
            <SearchBox />
          </Block>

          <MenuOrLinks
            account={account}
            isOpen={this.state.isMenuOpen}
            toggleMenu={this.toggleMenu.bind(this)} />

        </Container>
      </Toolbar>
    )
  }
}

export default Navbar
