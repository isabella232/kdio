import styled from 'styled-components'
import flexable from './style/flexable'

const Container = styled.section`
  max-width: ${p => p.width || p.theme.content.width[p.size]}px;
  padding: 0;
  margin: auto;

  ${p => flexable(p)}
`

Container.defaultProps = {
  size: 'lg'
}

export default Container
