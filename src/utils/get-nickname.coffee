import Cookies from 'js-cookie'

export default getNickname = -> Cookies.get 'username'
