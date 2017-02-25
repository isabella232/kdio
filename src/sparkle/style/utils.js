import Color from 'color'

const applyColorUtil = (util, color, ...args) =>
  Color(color)[util](...args).hex().toLowerCase()

export const lighten = (color, percent) =>
  applyColorUtil('lighten', color, percent)

export const darken = (color, percent) =>
  applyColorUtil('darken', color, percent)

export const alpha = (color, percent) =>
  Color(color).alpha(percent).string()

export const isDark = (color) => Color(color).dark()

export const isLight = (color) => Color(color).light()
