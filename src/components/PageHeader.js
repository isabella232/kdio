import React from 'react'

import Block from 'components/Block'
import Heading from 'components/Heading'

const PageHeader = ({ children }) => {

  return (
    <Block auto flex justify='center'>
      <Heading level={1}>{children}</Heading>
    </Block>
  )
}

export default PageHeader
