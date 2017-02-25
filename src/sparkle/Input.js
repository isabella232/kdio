import styled from 'styled-components'
import { alpha } from './style/utils'

const lightText = p => alpha(p.theme.colors.text, 0.6)
const borderColor = p =>
  p.error
  ? p.theme.colors.danger
  : p.success
    ? p.theme.colors.success
    : p.theme.colors.gray3


const Input = styled.input`
  border: 1px solid ${borderColor};
  height: 40px
  background-color: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  padding: 0 14px;
  border-radius: ${p => p.theme.borderRadius}px;
  color: ${lightText};
  box-sizing: border-box;

  transition: box-shadow 0.3s ease;

  &:focus {
    color: ${p => p.theme.colors.text};
    outline: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .15);
  }

  &::-webkit-input-placeholder { color: ${lightText}; font-weight: 300; }
  &:-moz-placeholder { color: ${lightText}; font-weight: 300; opacity: 1; }
  &::-moz-placeholder { color: ${lightText}; font-weight: 300; opacity: 1; }
  &:-ms-input-placeholder { color: ${lightText}; font-weight: 300; }
`

export default Input
