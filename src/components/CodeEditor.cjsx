import React from 'react'
import Editor from 'react-codemirror'
import { withRebass, Block } from 'rebass'
import { pick, merge, omit } from 'lodash'
import CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/elegant.css'
import 'codemirror/mode/javascript/javascript'

PropsKeys =
  REBASS: ['theme', 'style', 'subComponentStyles']
  REACT_CODEMIRROR: Object.keys Editor.propTypes
  CODEMIRROR: Object.keys CodeMirror.defaults
  BLOCK: [
    'borderColor', 'border', 'borderLeft',
    'borderTop', 'borderBottom', 'borderRight'
  ]

CodeEditor = (props, context) ->

  rebassProps = pick props, PropsKeys.REBASS
  reactCMProps = pick props, PropsKeys.REACT_CODEMIRROR
  codeMirrorProps = pick props, PropsKeys.CODEMIRROR

  blockProps = pick props, PropsKeys.BLOCK
  blockProps = omit blockProps, ['theme']

  editorProps = merge {}, reactCMProps, codeMirrorProps

  <Block style={rebassProps.style} {...blockProps}>
    <Editor {...editorProps} />
  </Block>

CodeEditor._name = 'CodeEditor'

export default withRebass CodeEditor
