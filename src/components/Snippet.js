import React from 'react'
import { Pre } from 'rebass'

const Snippet = ({ children, prefix = ':❯' }) => (
  <Pre p={1} mt={2} backgroundColor="#F9F9F9" color="#434343">
    {prefix} {children}
  </Pre>
)

export default Snippet
