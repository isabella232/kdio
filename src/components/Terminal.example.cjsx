import getTheme from 'utils/get-hterm-theme'

import Component from './Terminal'

export { Component }

export name = 'Terminal'

export description = """
`<Terminal />` is responsible for rendering overview of a stack template.
"""

import Shell from 'hterm-shell'

import KdIo from 'commands/kd-io'

Shell.commands.register KdIo

export props =
  theme: getTheme('atom-one')
  onTerminal: (term) ->
    term.runCommandClass Shell, '--prompt=:>'

