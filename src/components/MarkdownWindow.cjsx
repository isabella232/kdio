import React, { PropTypes } from 'react'
import { omit } from 'lodash'

import WindowPanel from 'components/WindowPanel'
import Markdown from 'react-markdown'

export default MarkdownWindow = (props) ->

  { title, content } = props

  <WindowPanel title={title}>
    <Block p={2}>
      <Markdown source={content} />
    </Block>
  </WindowPanel>

MarkdownWindow._name = 'MarkdownWindow'

MarkdownWindow.propTypes =
  title: PropTypes.string
  content: PropTypes.string

MarkdownWindow.defaultProps =
  title: 'Untitled.md'
  content: ''

