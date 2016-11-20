import Cookies from 'cookies-js'

export default getSessionToken = -> Cookies.get 'clientId'
