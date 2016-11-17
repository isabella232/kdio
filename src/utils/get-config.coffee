GROUP_NAME = 'kd-io'
KODING_URL = "http://dev.koding.com:8090"

getConfig = ->
  return {
    groupName: GROUP_NAME
    kodingUrl: KODING_URL
  }

export default getConfig
