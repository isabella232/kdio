import React from 'react'
import { highlightBlock } from 'highlight.js'

import 'highlight.js/styles/arduino-light.css'

highlight = (language) -> (codeEl) ->
  if codeEl?
    highlightBlock codeEl

export default CodeBlock = (props) ->

  { children, language, literal } = props

  <pre>
    <code ref={highlight language} className={language}>
      {children or literal or null}
    </code>
  </pre>


