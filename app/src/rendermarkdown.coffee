marked   = require 'marked'
renderer = new marked.Renderer

renderer.heading = (text, level) ->

  escapedText = text.toLowerCase().replace /[^\w]+/g, '-'

  """
  <h#{level} id="#{escapedText}">
    <a class="anchor" href="##{escapedText}">
      <span class="header-link"></span>
      #{text}
    </a>
  </h#{level}>
  """


module.exports = renderMarkdown = (content) ->

  marked content, { renderer }
