import BaseBongoClient from '@koding/bongo-client'

export default class BongoClient extends BaseBongoClient

  sendXhr: (url, method, queue) ->
    xhr = new XMLHttpRequest
    xhr.open method, url
    xhr.setRequestHeader "Content-type", "application/json;charset=UTF-8"
    xhr.onreadystatechange = =>

      return  if xhr.readyState is 0   # 0: UNSENT
      return  if xhr.readyState isnt 4 # 4: DONE

      if xhr.status >= 400
        return console.error "XHR Error: #{JSON.stringify xhr.status}", queue

      return  if xhr.status not in [200, 304]

      try
        requests = JSON.parse xhr.response
      catch e
        message = "XHR Error: could not parse response #{xhr.response}"
        @emit 'error', new Error message
        return

      @handleRequest request for request in requests when request

    payload = JSON.stringify {
      @channelName
      queue
      sessionToken: @getSessionToken()
      userArea: @getUserArea()
    }

    xhr.send payload

