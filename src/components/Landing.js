import React from 'react'
import { Text, withRebass } from 'rebass'

import Button from 'components/Button'
import Block from 'components/Block'
import Container from 'components/Container'
import LandingNavbar from 'components/LandingNavbar'
import LandingFooter from 'components/LandingFooter'
import TerminalStatic from 'components/TerminalStatic'

import contents from 'utils/landing-contents'

const LandingHeader = (props) => {

  const styles = {
    headline: {
      fontSize: '42px',
      lineHeight: '50px',
      fontWeight: 400
    },
    subtitle: {
      fontSize: '26px'
      lineHeight: '30px'
      fontWeight: 300
    },
    outerWrapper: {
      height: 550
    },
    innerWrapper: {
      maxWidth: 900,
      textAlign: 'center'
    }
  }

  return (
    <Block flex color='white' align='center' justify='center' style={styles.outerWrapper}>
      <Block flex flexColumn align='center' style={styles.innerWrapper}>
        <Text mb={2} style={styles.headline}>
          Make cloud your development environment.
        </Text>
        <Text mb={4} style={styles.subtitle}>
          Use your own IDE, code editor and terminal. KD.IO allows volume mounting
          and SSH’ing into their VMs. Create best environments now!
        </Text>
        <Button flex align='center' justify='center' backgroundColor='blue' style={{height: 50, width: 180}}>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>Get Started</Text>
        </Button>
      </Block>
    </Block>
  )
}

const ContentGroup = ({ title, text, children }) => {
  const styles = {
    title: {
      color: '#515151',
      fontSize: '26px',
      fontWeight: 400
    },
    text: {
      color: '#727272',
      fontSize: '16px',
      fontWeight: 300
    }
  }

  if (!Array.isArray(text)) {
    text = [text]
  }

  return (
    <Block mb={4}>
      <Text mb={2} style={styles.title}>{title}</Text>
      {text.map((t, i) => <Text key={i} mb={2} style={styles.text}>{t}</Text>)}
      <Block mt={2}>{children}</Block>
    </Block>
  )
}

const LandingContent = (props) => (
  <Block py={4} backgroundColor='white'>
    <Container style={{ width: 600 }}>
      {contents.map((content, index) => {
        return (
          <ContentGroup key={index} title={content.title} text={content.text}>
            <TerminalStatic lines={content.lines} />
          </ContentGroup>
        )
      })}
    </Container>
  </Block>
)

const LandingHero = (props) => {

  const styles = {
    text: {
      fontSize: '28px',
      lineHeight: '50px',
      fontWeight: 600,
    },
    innerWrapper: {
      maxWidth: 900,
      textAlign: 'center'
    },
    cta: {
      fontSize: 20,
      fontWeight: 500
    }
  }

  return (
    <Block flex color='white' align='center' justify='center' style={{height: 300}}>
      <Block flex flexColumn align='center' style={styles.innerWrapper}>
        <Text mb={4} style={styles.text}>
          Spend less time configuring and more time building!
        </Text>
        <Button big backgroundColor='blue'>
          <Text style={styles.cta}>Get Started</Text>
        </Button>
      </Block>
    </Block>
  )
}

const Landing = (props) => (
  <Block style={{ position: 'relative' }}>
    <LandingNavbar />
    <LandingHeader />
    <LandingContent />
    <LandingHero />
    <LandingFooter />
  </Block>
)

export default withRebass(Landing)
