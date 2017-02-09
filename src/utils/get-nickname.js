import Cookies from 'js-cookie'

const getNickname = function() {
  return Cookies.get('username')
}

export default getNickname
