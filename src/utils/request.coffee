import $ from 'jquery'

export default request = (url, body, query, sendCookies = yes) ->

  if query
    query = $.param query
    url = "#{url}?#{query}"

  $.ajax(
    url: url
    type: 'POST'
    data: body
    xhrFields: { withCredentials: sendCookies }
  )

