import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import ColorSpec from './ColorSpec'
import Heading from './Heading'
import DropdownMenu from './DropdownMenu'
import Button from './Button'
import Input from './Input'
import SearchBox from './SearchBox'

let colors = {

  white: '#fff',
  pink: '#f2778a',
  green: '#48ba7d',
  blue: '#67a2ee',
  midnight: '#1e2e42',

  gray1: '#515151',
  gray2: '#727272',
  gray3: '#e6e6e6',

  bg1: '#f8f8f8',
  bg2: '#fcfcfc',

}

const fontSizes = {
  heading: [28, 24, 20, 18],
  text: [16, 15, 14, 12]
}

const fontWeights = {
  heading: [300, 500, 300, 500],
  text: [600, 300, 200, 300]
}

const theme = {
  colors: {
    ...colors,
    info: colors.blue,
    success: colors.green,
    danger: colors.pink,

    heading: colors.gray1,
    text: colors.gray2,

    inverted: {
      text: colors.white
    }
  },

  font: {
    sizes: fontSizes,
    weights: fontWeights,
  },

  content: {
    width: {
      lg: 1260,
      md: 1024,
      sm: 768,
    }
  },

  borderRadius: 4,
}

const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bg: theme.colors.white,
  }
}

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bg: theme.colors.midnight,
    text: theme.colors.white,
    heading: theme.colors.white,
    inverted: {
      text: theme.colors.gray2
    }
  }
}

const Text = styled.p`
  color: ${p => p.color || p.theme.colors.text};
  font-size: ${p => p.theme.font.sizes.text[p.level - 1]}px;
  font-weight: ${p => p.theme.font.weights.text[p.level - 1]};
  margin: 0;
`

const Container = styled.div`
  max-width: ${p => p.width || p.theme.content.width.lg}px;
  padding: 0;
  margin: auto;

  @media (max-width: ${p => p.theme.content.width.md}px) {
    max-width: ${p => p.width || p.theme.content.width.md}px
  }

  @media (max-width: ${p => p.theme.content.width.sm}px) {
    max-width: ${p => p.width || p.theme.content.width.sm}px
  }
`

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-color: ${p => p.bgColor};
  }
`

const GuideBox = styled.div`
  display: flex;
  padding: 0 20px 20px 0;

  > * {
    flex: 1 1 auto;
  }

  > * + * {
    margin-left: 20px;
  }
`

const GuideHeading = styled(Heading)`
  margin-bottom: 10px;
  border-bottom: 1px solid ${p => p.theme.colors.text}
`

const GuideMenu = styled.div`
  position: fixed;
  background: rgba(0,0,0, 0.15);
`


const AppWrapper = styled.div`
  background-color: ${p => p.theme.colors.bg};
  padding-bottom: 500px;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { theme: darkTheme, searchVal: '' }
  }

  setLight() {
    this.setState({ theme: lightTheme })
  }

  setDark() {
    this.setState({ theme: darkTheme })
  }

  onSearchChange({ target }) {
    this.setState({ searchVal: target.value })
  }

  render() {
    const dropdownItems = [
      { children: 'Your Profile' },
      { children: 'Settings' },
      { children: 'Credentials' },
      { children: 'Logout' },
    ]

    const dropdownItemsWithSelection = [
      { children: 'Your Profile' },
      { children: 'Settings', selected: true },
      { children: 'Credentials' },
      { children: 'Logout' },
    ]

    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>

          <GuideMenu>
            <Button onClick={this.setLight.bind(this)}>Light Theme</Button>
            <Button onClick={this.setDark.bind(this)}>Dark Theme</Button>
          </GuideMenu>

          <Container width={600}>

            <GuideHeading level={2}>Colors</GuideHeading>
            <GuideBox>
              <ColorSpec>{lightTheme.colors.info}</ColorSpec>
              <ColorSpec>{lightTheme.colors.success}</ColorSpec>
              <ColorSpec>{lightTheme.colors.danger}</ColorSpec>
            </GuideBox>
            <GuideBox>
              <ColorSpec>{colors.gray1}</ColorSpec>
              <ColorSpec>{colors.gray2}</ColorSpec>
              <ColorSpec>{colors.gray3}</ColorSpec>
              <ColorSpec>{colors.midnight}</ColorSpec>
            </GuideBox>
          </Container>

          <Container width={600}>

            <GuideHeading level={2}>Typography</GuideHeading>
            <GuideBox>
              <div>
                <Text level={1}>t.1 Text Element</Text>
                <Text level={2}>t.2 Text Element</Text>
                <Text level={3}>t.3 Text Element</Text>
                <Text level={4}>t.4 Text Element</Text>
              </div>
              <div>
                <Heading level={1}>h.1 Heading Element</Heading>
                <Heading level={2}>h.2 Heading Element</Heading>
                <Heading level={3}>h.3 Heading Element</Heading>
                <Heading level={4}>h.4 Heading Element</Heading>
              </div>
            </GuideBox>

          </Container>

          <Container width={600}>
            <GuideHeading>Dropdowns</GuideHeading>
            <GuideBox>
              <DropdownMenu items={dropdownItems} />
              <DropdownMenu items={dropdownItemsWithSelection} />
            </GuideBox>
          </Container>

          <Container width={600}>
            <GuideHeading>Buttons</GuideHeading>
            <GuideBox>
              <Button type='info'>Info</Button>
              <Button type='success'>Success</Button>
              <Button type='danger'>Danger</Button>
            </GuideBox>
            <GuideBox>
              <Button outline type='info'>Info</Button>
              <Button outline type='success'>Success</Button>
              <Button outline type='danger'>Danger</Button>
            </GuideBox>
            <GuideBox>
              <Button small type='info'>Info</Button>
              <Button small type='success'>Success</Button>
              <Button small type='danger'>Danger</Button>
            </GuideBox>
            <GuideBox>
              <Button small outline type='info'>Info</Button>
              <Button small outline type='success'>Success</Button>
              <Button small outline type='danger'>Danger</Button>
            </GuideBox>
          </Container>

          <Container width={600}>
            <GuideHeading>Input Fields</GuideHeading>
            <GuideBox>
              <Input placeholder='Placeholder' />
              <Input error placeholder='Error' />
              <Input success placeholder='Success' />
            </GuideBox>
          </Container>

          <Container width={600}>
            <GuideHeading>SearchBox</GuideHeading>
            <GuideBox>
              <SearchBox
                items={dropdownItems.map(i => ({ title: i.children }))}
                onFetchRequest={() => dropdownItems.map(i => ({ title: i.children }))}
                inputProps={{
                  placeholder: 'Search stack templates...' ,
                  value: this.state.searchVal,
                  onChange: this.onSearchChange.bind(this)
                }}
              />
            </GuideBox>
          </Container>



        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
