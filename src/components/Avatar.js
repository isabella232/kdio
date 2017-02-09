import React from 'react'
import { Avatar as BaseAvatar } from 'rebass'
import { omit } from 'lodash'
import getAvatarUri from 'utils/get-avatar-uri'

const Avatar = (props) => {

  const { account, size, style } = props

  const src = getAvatarUri(
    account, size, size, (global.devicePixelRatio || 1)
  )

  return (
    <BaseAvatar {...omit(props, 'account')} src={src} style={style} />
  )
}

export default Avatar
