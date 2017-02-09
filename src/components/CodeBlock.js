import React from 'react'
import { highlightBlock } from 'highlight.js'
import 'highlight.js/styles/arduino-light.css'

const highlight = language => codeEl => codeEl ? highlightBlock(codeEl) : null

const CodeBlock = ({ children, language, literal }) => (
  <pre style={{margin: 0}}>
    <code ref={highlight(language)} className={language}>
      {children || literal || null}
    </code>
  </pre>
)

export default CodeBlock
