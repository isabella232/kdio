Login = require './login'
UserPage = require './user'
Register = require './register'

module.exports = sections =
  welcome       :
    route       : '/'
    title       : 'home'
    content     : """
      # Welcome to kd.io
      ## Installation

      ```
        foo = bar
      ```

      - baz
      - test

      <b>gokmen</b>
    """
  register      :
    viewClass   : Register
  login         :
    viewClass   : Login
  user          :
    viewClass   : UserPage
    hidden      : yes

  __users: ['gokmen', 'devrim']