import React from 'react'
import { Heading, Pre } from 'rebass'

import Block from 'components/Block'

const EmptyWithMessage = ({ title, message, command }) => {

  const blockProps = {
    flex: true,
    flexColumn: true,
    rounded: true,
    align: 'center',
    justify: 'center',
    backgroundColor: 'white',
    p: 2,
    style: {
      height: 350
    }
  }

  const titleProps = {
    p: 1,
    level: 3,
    color: '#515151'
  }

  const messageProps = {
    p: 1,
    level: 4,
    color: '#989898'
  }

  const commandProps = {
    p: 2,
    mt: 2,
    backgroundColor: '#F9F9F9',
    color: '#434343'
  }

  return (
    <Block {...blockProps}>
      <Heading {...titleProps}>{title}</Heading>
      <Heading {...messageProps}>{message}</Heading>
      {command && <Pre {...commandProps}>:❯ {command}</Pre>}
    </Block>
  )
}

export default EmptyWithMessage
