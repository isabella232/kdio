import React from 'react'
import { Avatar as BaseAvatar } from 'rebass'
import { omit } from 'lodash'
import getAvatarUri from 'utils/get-avatar-uri'

export default Avatar = (props) ->

  { account, size, style } = props

  src = getAvatarUri(
    account, size, size, global.devicePixelRatio ? 1
  )

  props = omit props, 'account'

  <BaseAvatar {...props} src={src} style={style} />
