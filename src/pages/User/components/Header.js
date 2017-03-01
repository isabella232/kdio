import React from 'react'
import styled from 'styled-components'

import Block from 'components/Block'
import Container from 'components/Container'

const Wrapper = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
  background-color: ${p => p.theme.colors.bg1};
  text-align: center;
`

const UserPageHeader = ({ children }) => {

  return (
    <Wrapper>
      <Container py={4}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default UserPageHeader

