import Cookies from 'js-cookie'

export default getSessionToken = -> Cookies.get 'clientId'
