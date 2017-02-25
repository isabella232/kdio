import React from 'react'
import styled from 'styled-components'
import { lighten, darken, alpha } from './style/utils'

const Btn = styled.button`
  font-size: ${p => p.small ? 14 : 19}px;
  font-weight: 400;
  border-radius: ${p => p.theme.borderRadius}px;
  height: ${p => p.small ? 30 : 50}px;
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px 0 ${p => alpha(p.theme.colors[p.buttonType], 0.5)};
  }

  &:focus:active {
    box-shadow: none;
  }
`

const SolidButton = styled(Btn)`
  background-color: ${p => p.theme.colors[p.buttonType]};
  color: ${p => p.theme.colors.inverted.text};
  border: none;

  &:hover {
    background-color: ${p => darken(p.theme.colors[p.buttonType], 0.05)};
  }

  &:active {
    background-color: ${p => lighten(p.theme.colors[p.buttonType], 0.05)};
  }
`


const OutlineButton = styled(Btn)`
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid ${p => p.theme.colors.gray3};
  color: ${p => p.buttonType === 'info'
    ? p.theme.colors.text
    : p.theme.colors[p.buttonType]};

  &:hover {
    background-color: ${p => p.theme.colors.gray3};
  }

  &:focus {
    box-shadow: 0 0 15px 0 ${p => p.theme.colors.gray3};
  }
`

const Button = ({ outline, type, ...props }) => (
  outline
  ? <OutlineButton type='button' buttonType={type} {...props} />
  : <SolidButton type='button' buttonType={type} {...props} />
)

Button.defaultProps = {
  type: 'info'
}

export default Button
