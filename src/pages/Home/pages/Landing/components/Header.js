import React from 'react'
import { Text } from 'rebass'

import Button from 'components/Button'
import Block from 'components/Block'

const LandingHeader = (props) => {

  const styles = {
    headline: {
      fontSize: '42px',
      lineHeight: '50px',
      fontWeight: 400,
    },
    subtitle: {
      fontSize: '26px',
      lineHeight: '30px',
      fontWeight: 300,
    },
    outerWrapper: {
      height: 550,
    },
    innerWrapper: {
      maxWidth: 900,
      textAlign: 'center',
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

export default LandingHeader
