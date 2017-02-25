import React from 'react'
import { Input } from 'rebass'

const SearchBox = ({ inputProps }) => {
  return (
    <input
      name='search'
      placeholder='Search stack templates...'
      {...inputProps} />
  )
}

export default SearchBox
