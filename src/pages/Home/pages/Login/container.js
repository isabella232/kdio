import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { login } from 'modules/auth'

import Login from './components/Login'

const mapDispatchToProps = (dispatch) => ({

  onSubmit: (username, password) => {
    dispatch(login(username, password)).then(({ token }) => {
      Cookies.set('username', username)
      Cookies.set('clientId', token)
      location.replace(`/${username}`)
    })
  }

})

export default connect(
  null,
  mapDispatchToProps
)(Login)
