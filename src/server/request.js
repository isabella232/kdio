import najax from 'najax'

const request = (url, body) => {
  const options = {
    url,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(body)
  }

  return najax(options)
}

export default request
