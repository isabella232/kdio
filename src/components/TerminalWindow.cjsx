import React from 'react'
import { omit } from 'lodash'

import WindowPanel from 'components/WindowPanel'
import Terminal from 'components/Terminal'

export default TerminalWindow = (props) ->

  <WindowPanel title={props.title}>
    <Terminal {...omit props} />
  </WindowPanel>

