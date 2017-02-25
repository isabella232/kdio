import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { capitalize } from 'lodash'
import Text from 'components/Text'

const pickColor = ({ level, theme }) => (
  level === 'private' ? theme.colors.pink : theme.colors.green
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 2px 10px;
  border: 1px solid ${p => pickColor(p)}
`

const AccessLevelBadge = ({ level }) => (
  <Wrapper level={level}>
    <Text level={4}>{capitalize(level)}</Text>
  </Wrapper>
)


export default AccessLevelBadge
