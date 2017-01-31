import immutable from 'utils/immutable'

SHOW_HELP = 'landing-page/SHOW_HELP'
HIDE_HELP = 'landing-page/HIDE_HELP'
SET_HELP_TITLE = 'landing-page/SET_HELP_TITLE'
SET_HELP_CONTENT = 'landing-page/SET_HELP_CONTENT'

initialState = immutable({
  helpVisible: no
  helpTitle: 'Help.md'
  helpContent: ''
  replVisible: no
})

export reducer = (state = initialState, action) ->

  { payload, type } = action

  switch type
    when SHOW_HELP then state.set 'helpVisible', yes
    when HIDE_HELP then state.set 'helpVisible', no
    when SET_HELP_TITLE then state.set 'helpTitle', payload
    when SET_HELP_CONTENT then state.set 'helpContent', payload
    else state


export showHelp = -> { type: SHOW_HELP }
export hideHelp = -> { type: HIDE_HELP }
export setHelpTitle = (payload) -> { type: SET_HELP_TITLE, payload }
export setHelpContent = (payload) -> { type: SET_HELP_CONTENT, payload }
