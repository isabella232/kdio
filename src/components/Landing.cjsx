import React from 'react'
import { Text, withRebass } from 'rebass'

import Button from 'components/Button'
import Block from 'components/Block'
import Container from 'components/Container'
import LandingNavbar from 'components/LandingNavbar'
import LandingFooter from 'components/LandingFooter'
import TerminalStatic from 'components/TerminalStatic'

import contents from 'utils/landing-contents'


LandingHeader = (props) ->

  headlineStyle =
    fontSize: '42px'
    lineHeight: '50px'
    fontWeight: 400

  subtitleStyle =
    fontSize: '26px'
    lineHeight: '30px'
    fontWeight: 300

  <Block flex color='white' align='center' justify='center' style={height: 550}>
    <Block flex flexColumn align='center' style={maxWidth: 900, textAlign: 'center'}>
      <Text mb={2} style={headlineStyle}>
        Make cloud your development environment.
      </Text>
      <Text mb={4} style={subtitleStyle}>
        Use your own IDE, code editor and terminal. KD.IO allows volume mounting
        and SSH’ing into their VMs. Create best environments now!
      </Text>
      <Button flex align='center' justify='center' backgroundColor='blue' style={height: 50, width: 180}>
        <Text style={fontSize: 20, fontWeight: 400}>Get Started</Text>
      </Button>
    </Block>
  </Block>


ContentGroup = ({ title, text, children }) ->

  titleStyle =
    color: '#515151'
    fontSize: '26px'
    fontWeight: 400

  textStyle =
    color: '#727272'
    fontSize: '16px'
    fontWeight: 300

  text = [text]  unless Array.isArray text

  <Block mb={4}>

    <Text mb={2} style={titleStyle}>
      {title}
    </Text>

    {text.map (paragraph, index) ->
      <Text key={index} mb={2} style={textStyle}>
        {paragraph}
      </Text>
    }

    <Block mt={2}>
      {children}
    </Block>

  </Block>


LandingContent = (props) ->

  <Block py={4} backgroundColor='white'>
    <Container style={width: 600}>

      {contents.map (content, index) ->
        <ContentGroup key={index} title={content.title} text={content.text}>
          <TerminalStatic lines={content.lines} />
        </ContentGroup>
      }

    </Container>
  </Block>

LandingHero = (props) ->

  textStyle =
    fontSize: '28px'
    lineHeight: '50px'
    fontWeight: 600

  <Block flex color='white' align='center' justify='center' style={height: 300}>
    <Block flex flexColumn align='center' style={maxWidth: 900, textAlign: 'center'}>
      <Text mb={4} style={textStyle}>
        Spend less time configuring and more time building!
      </Text>
      <Button big backgroundColor='blue'>
        <Text style={fontSize: 20, fontWeight: 500}>Get Started</Text>
      </Button>
    </Block>
  </Block>


Landing = (props) ->
  <Block style={position: 'relative'}>
    <LandingNavbar />
    <LandingHeader />
    <LandingContent />
    <LandingHero />
    <LandingFooter />
  </Block>


export default withRebass Landing
