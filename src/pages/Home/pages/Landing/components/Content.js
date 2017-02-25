import React from 'react'
import { Text } from 'rebass'

import Block from 'components/Block'
import Container from 'components/Container'
import TerminalStatic from 'components/TerminalStatic'

import contents from 'utils/landing-contents'

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

export default LandingContent
