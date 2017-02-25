import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: ${p => p.height}px;
  width: auto;
`

const Svg = styled.svg`
  height: 100%;
`

const BrandLogo = ({ size = 32, color = '#fff' }) => {
  return (
    <Wrapper height={size}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.4 13.7">
        <path d="M8.6 0L5.2.3l3 6.6-3 6.3 3.5.3 3-7-3-6.7" fill={color} />
        <ellipse cx="1.6" cy="10.9" fill={color} rx="1.6" ry="1.7" />
        <ellipse cx="1.6" cy="5.4" fill={color} rx="1.6" ry="1.7" />
        <path d="M14.2 10.7h9.2V13h-9.2z" fill={color} />
      </Svg>
    </Wrapper>
  )
}

export default BrandLogo
