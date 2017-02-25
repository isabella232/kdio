import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { Input, Toolbar, Breadcrumbs, Space } from 'rebass'

import BrandLogo from 'components/BrandLogo'
import Link from 'components/Link'
import Block from 'components/Block'
import Container from 'components/Container'

import SearchContainer from 'pages/User/components/Search'
import MenuOrLinks from './MenuOrLinks'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }

  toggleMenu(state) {
    this.setState({ isMenuOpen: state })
  }

  render() {
    const { account } = this.props

    return (
      <Toolbar>
        <Container p={0} flex align='center'>

          <Block style={{ marginRight: 10 }}>
            <Link to='/'><BrandLogo size={20} /></Link>
          </Block>

          <Block flex auto align='center'>
            <SearchContainer />
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
