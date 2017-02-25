import React from 'react'
import styled from 'styled-components'
import { alpha } from './style/utils'

export const DropdownContainer = styled.div`
  border-radius: ${p => p.theme.borderRadius}px;
  overflow: hidden;
  box-shadow: 0 0 15px ${alpha('#000', 0.15)};
  border: 1px solid ${p => p.theme.colors.info};
  font-size: 14px;
  color: ${p => p.theme.colors.gray2};
  box-sizing: border-box;
`

export const DropdownItem = styled.div `
  padding: 0 14px;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
  line-height: 40px;
  cursor: pointer;

  background-color: ${p => p.selected ? p.theme.colors.bg1 : '#fff'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #fff !important;
    background: ${p => p.theme.colors.info};
  }
`

const DropdownMenu = ({ items }) => (
  <DropdownContainer>
    {items.map((item, index) =>
      <DropdownItem key={index} {...item} />)}
  </DropdownContainer>
)

DropdownItem.defaultProps = {
  onClick() {}
}

export default DropdownMenu
