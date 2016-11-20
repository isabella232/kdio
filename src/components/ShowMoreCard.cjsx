import React, { PropTypes } from 'react'
import { Stat, Heading, Text, Block as BaseBlock, Badge, withRebass } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'

Block = withReflex()(BaseBlock)

propTypes =
  title: PropTypes.string
  count: PropTypes.string
  onClick: PropTypes.func

export default ShowMoreCard = (props) ->
  { style, title, count, onClick } = props

  <Block column flex wrap align='center' justify='center' backgroundColor='white' rounded style={style} onClick={onClick}>
    <Heading level={3}>+{count} More {title}</Heading>
    <Text color='blue'>See All</Text>
  </Block>

ShowMoreCard.contextTypes = { rebass: PropTypes.object }

ShowMoreCard.propTypes = propTypes
ShowMoreCard.defaultProps =
  style:
    width: 300
    height: 270
    # boxShadow: '0 0 20px #999'
    overflow: 'hidden'
    MozMacOsxFontSmoothing: 'grayscale'
    WebkitFontSmoothing: 'antialiased'
