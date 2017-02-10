import Cookies from 'js-cookie'

const LogoutRoute = (store) => ({
  path: 'logout',
  onEnter() {
    Cookies.remove('clientId')
    Cookies.remove('_csrf')
    Cookies.remove('username')
    location.replace('/')
  }
})

export default LogoutRoute
