import styled from 'styled-components'

const Text = styled.p`
  color: ${p => p.color || p.theme.colors.text};
  font-size: ${p => p.theme.font.sizes.text[p.level - 1]}px;
  font-weight: ${p => p.theme.font.weights.text[p.level - 1]};
  margin: 0;
`

export default Text
