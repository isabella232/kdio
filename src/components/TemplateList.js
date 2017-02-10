import React from 'react'
import { map, size } from 'lodash'
import { Box } from 'reflexbox'
import { Heading, Pre } from 'rebass'

import Container from 'components/Container'
import Block from 'components/Block'
import TemplateCard from 'components/TemplateCard'
import ShowMoreCard from 'components/ShowMoreCard'


export const EmptyListGeneric = () => {
  const color = 'white'
  const style = { height: '347px' }

  return (
    <Block rounded flex flexColumn p={2}
      align='center' justify='center'
      backgroundColor={color} style={style}>
      <Heading p={1} level={3} color="#515151">
        This user has not published any template yet.
      </Heading>
      <Heading p={1} level={4} color="#989898">
        Check back later, we will list them here once there is one.
      </Heading>
    </Block>
  )
}

export const EmptyListAuthUser = () => {

  const color = 'white'
  const style = { height: '347px' }

  return (
    <Block rounded flex flexColumn p={2}
      align='center' justify='center'
      backgroundColor={color} style={style}>
      <Heading p={1} level={3} color="#515151">
        You don’t have any template yet.
      </Heading>
      <Heading p={1} level={4} color="#989898">
        If you want to create one, please run the code below on your terminal.
      </Heading>
      <Pre p={2} mt={2} backgroundColor="#F9F9F9" color="#434343">
        :> kd template create
      </Pre>
    </Block>
  )
}

const TemplateList = (props) => {

  const { onTemplateClick, templates, isAuthUser } = props

  if (size(templates) > 0) {
    return (
      <Box>
        {map(templates, t =>
          <TemplateCard key={t.id} {...t} onClick={onTemplateClick.bind(null, t)} />)}
      </Box>
    )
  }
  else if (isAuthUser) {
    return <EmptyListAuthUser />
  }
  else {
    return <EmptyListGeneric />
  }
}

export default TemplateList
