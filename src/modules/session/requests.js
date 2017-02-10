import $ from 'jquery'
import Cookies from 'js-cookie'
import getConfig from 'utils/get-config'

export const fetchToken = () => new Promise((resolve, reject) => {
  if (Cookies.get('_csrf')) {
    return resolve()
  }
  const { kodingUrl } = getConfig()

  return $.ajax({
    url: `${kodingUrl}/-/teams/allow`,
    type: 'POST',
    success: (result) => {
      Cookies.set('_csrf', result.token)
      return resolve(result)
    },
    error: reject
  })
})

export const login = (username, password, groupName = getConfig().groupName) => {
  return new Promise((resolve, reject) => {
    const { kodingUrl } = getConfig()
    const data = {
      username: username,
      password: password,
      groupName: groupName,
      _csrf: Cookies.get('_csrf')
    }

    return $.ajax({
      url: kodingUrl + "/Login",
      type: 'POST',
      data: data,
      xhrFields: {
        withCredentials: true
      },
      success: (result) => {
        Cookies.set('username', username)
        return resolve(result)
      },
      error: reject
    })
  })
}

export const signup = (email, username, password, clientId, groupName = getConfig().groupName) => {
  return new Promise((resolve, reject) => {
    const { kodingUrl } = getConfig()

    const data = {
      username: username,
      password: password,
      email: email,
      clientId: clientId,
      alreadyMember: false,
      agree: 'on',
      _csrf: Cookies.get('_csrf'),
      passwordConfirm: password,
      slug: groupName
    }

    return $.ajax({
      url: kodingUrl + "/-/api/teams/join",
      type: 'POST',
      data: data,
      xhrFields: {
        withCredentials: true
      },
      success: resolve,
      error: reject
    })
  })
}
