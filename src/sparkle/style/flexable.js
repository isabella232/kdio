import styled, { css } from 'styled-components'

const flexable = (props) => {

  if (!props.flex) {
    return ''
  }

  return css`
    display: flex;
    ${p => p.justify && `justify-content: ${p.justify};`}
    ${p => p.align && `align-items: ${p.align};`}
    ${p => p.direction && `flex-direction: ${p.direction};`}
  `

}

export default flexable
