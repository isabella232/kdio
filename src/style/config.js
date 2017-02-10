const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  midgray: '#888',
  blue: '#08e',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  "default": baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

const monospace = '"Roboto Mono", Menlo, Consolas, monospace'
const inverted = colors.white
const scale = [0, 10, 20, 30, 40, 50, 60]
const fontSizes = [48, 32, 24, 22, 20, 16, 14]
const zIndex = [0, 2, 4, 8, 16]
const bold = 600
const borderRadius = 4
const borderColor = 'rgba(0, 0, 0, .25)'

export default {
  scale,
  fontSizes,
  bold,
  monospace,
  zIndex,
  colors,
  inverted,
  borderRadius,
  borderColor,
  pureRender: true
}
