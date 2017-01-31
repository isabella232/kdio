import React, { PropTypes } from 'react'
import { Avatar as BaseAvatar } from 'rebass'
import getAvatarUri from 'utils/get-avatar-uri'

export default Avatar = (props) ->

  { account, size, style } = props

  src = getAvatarUri(
    account, size, size, global.devicePixelRatio ? 1
  )


  <BaseAvatar {...props} src={src} style={style} />
