const getGravatarUri = function(account, size) {
  const { hash } = account.profile
  const size = Math.round(size)
  const defaultUri = `https://koding-cdn.s3.amazonaws.com/new-avatars/default.avatar.${size}.png`
  const { protocol } = global.location
  return `${protocol}//gravatar.com/avatar/${hash}?size=${size}&d=${defaultUri}&r=g`
}

const getAvatarUri = function(account, width, height, dpr) {
  const { profile } = account
  if(profile.avatar && profile.avatar.match(regexps.webProtocolRegExp)) {
    width = width * dpr
    height = height * dpr
    return proxifyUrl(profile.avatar, {
      crop: true,
      width: width,
      height: height
    })
  }
  return getGravatarUri(account, width * dpr)
}

export default getAvatarUri
