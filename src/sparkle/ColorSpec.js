import styled from 'styled-components'
import { isLight, lighten, darken } from './style/utils'

const ColorSpec = styled.div`
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 180px;
  line-height: 60px;
  background-color: ${p => p.children};
  color: ${p => isLight(p.children) ? p.theme.colors.text : p.theme.colors.inverted.text };

  &::before, &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-size: ${p => p.theme.font.sizes.text[3]}px;
  }

  &::before {
    content: '${p => lighten(p.children, 0.05)}';
    background-color: ${p => lighten(p.children, 0.05)};
  }

  &::after {
    content: '${p => darken(p.children, 0.05)}';
    background-color: ${p => darken(p.children, 0.05)};
  }
`

export default ColorSpec
