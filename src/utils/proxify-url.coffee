import getConfig from './get-config'

export default proxifyUrl = (url = '', options = {}) ->

  options.width   or= -1
  options.height  or= -1
  options.grow    or= yes

  if url is ''
    return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

  if options.width or options.height
    endpoint = 'resize'
  if options.crop
    endpoint = 'crop'

  { kodingUrl } = getConfig()

  fullurl = kodingUrl +
            '/-/image/cache?' +
            "endpoint=#{endpoint or ''}&" +
            "grow=#{options.grow}&" +
            "width=#{options.width}&" +
            "height=#{options.height}&" +
            "url=#{encodeURIComponent url}"

  return fullurl
