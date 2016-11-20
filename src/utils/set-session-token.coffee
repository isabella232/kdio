import Cookies from 'cookies-js'

export default setSessionToken = (token) -> Cookies.set 'clientId', token
