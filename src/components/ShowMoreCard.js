import React, { PropTypes } from 'react'
import { Heading, Text } from 'rebass'
import Block from 'components/Block'

const ShowMoreCard = (props) => {
  const { style, title, count, onClick } = props

  return (
    <Block column flex wrap align='center' justify='center'
      backgroundColor='white' rounded style={style} onClick={onClick}>
      <Heading level={3}>+{count} More {title}</Heading>
      <Text color='blue'>See All</Text>
    </Block>
  )
}

ShowMoreCard.contextTypes = {
  rebass: PropTypes.object
}

ShowMoreCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  onClick: PropTypes.func,
}

ShowMoreCard.defaultProps = {
  style: {
    width: 300,
    height: 270,
    overflow: 'hidden',
    MozMacOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  }
}

export default ShowMoreCard
