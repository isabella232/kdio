import React from 'react'
import { Flex } from 'reflexbox'

CenteredLayout = ({ children }) ->
  <Flex
    align='center'
    justify='center'
    style={{ width: '100%', height: '100%' }}
    children={children} />

export default CenteredLayout

