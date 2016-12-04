import Cookies from 'js-cookie'

export default setSessionToken = (token) -> Cookies.set 'clientId', token
