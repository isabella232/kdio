import React from 'react'
import styled from 'styled-components'

const Heading = ({ level, color, ...props }) => {
  const Component = styled['h' + level]`
    color: ${p => color || p.theme.colors.heading};
    font-size: ${p => p.theme.font.sizes.heading[level - 1]}px;
    font-weight: ${p => p.theme.font.weights.heading[level - 1]};
    line-height: 1.25;
  `

  return (
    <Component {...props} />
  )
}

Heading.defaultProps = {
  level: 2
}

export default Heading
