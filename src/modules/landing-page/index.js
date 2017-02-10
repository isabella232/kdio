import immutable from 'utils/immutable'

export const SHOW_HELP = 'landing-page/SHOW_HELP'
export const HIDE_HELP = 'landing-page/HIDE_HELP'
export const SET_HELP_TITLE = 'landing-page/SET_HELP_TITLE'
export const SET_HELP_CONTENT = 'landing-page/SET_HELP_CONTENT'

const initialState = immutable({
  helpVisible: no
  helpTitle: 'Help.md'
  helpContent: ''
  replVisible: no
})

export const reducer = (state = initialState, action) => {

  const { payload, type } = action

  switch (type) {
    case SHOW_HELP:
      return state.set('helpVisible', true)
    case HIDE_HELP:
      return state.set('helpVisible', false)
    case SET_HELP_TITLE:
      return state.set('helpTitle', payload)
    case SET_HELP_CONTENT:
      return state.set('helpContent', payload)
    default:
      return state
  }
}

export const showHelp = () => ({
  type: SHOW_HELP
})

export const hideHelp = () => ({
  type: HIDE_HELP
})

export const setHelpTitle = (payload) => ({
  type: SET_HELP_TITLE,
  payload: payload
})

export const setHelpContent = (payload) => ({
  type: SET_HELP_CONTENT,
  payload: payload
})
