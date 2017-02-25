import React from 'react'
import { Text } from 'rebass'

import Button from 'components/Button'
import Block from 'components/Block'

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

export default LandingHero
