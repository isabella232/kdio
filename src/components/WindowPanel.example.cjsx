import React from 'react'
import WindowPanel from './WindowPanel'
import Terminal from './Terminal'

export { WindowPanel as Component }

export name = 'WindowPanel'

export description = """
`<WindowPanel />` is responsible for rendering overview of a stack template.
"""

export props =
  title: "Window"
  children: <Terminal />


