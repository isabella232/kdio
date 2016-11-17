# copy/paste & transform to coffee from
# https://github.com/jxnblk/rebass/blob/master/src/config.js
import { assign } from 'lodash'

monospace = '"Roboto Mono", Menlo, Consolas, monospace'

baseColors =
  black: '#111'
  white: '#fff'
  gray: '#ddd'
  midgray: '#888'
  blue: '#08e'
  red: '#f52'
  orange: '#f70'
  green: '#1c7'


colors = assign {}, baseColors,
  primary: baseColors.blue
  secondary: baseColors.midgray
  default: baseColors.black
  info: baseColors.blue
  success: baseColors.green
  warning: baseColors.orange
  error: baseColors.red

inverted = colors.white

scale = [ 0, 8, 16, 32, 64 ]

fontSizes = [ 48, 32, 24, 20, 16, 14, 12 ]

zIndex = [ 0, 2, 4, 8, 16 ]

bold = 600
borderRadius = 2
borderColor = 'rgba(0, 0, 0, .25)'

export default config = {
  scale
  fontSizes
  bold
  monospace
  zIndex
  colors
  inverted
  borderRadius
  borderColor
  pureRender: yes
}

