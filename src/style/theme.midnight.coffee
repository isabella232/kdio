import { assign } from 'lodash'
import baseColors from './colors'

monospace = '"Roboto Mono", Menlo, Consolas, monospace'

fontFamily = '"proxima-nova", sans-serif'

themeColors =
  black: baseColors.space
  white: baseColors.white
  gray: baseColors.ash
  midgray: baseColors.dolphin
  blue: baseColors.sky
  red: baseColors.rose
  orange: baseColors.aws
  green: baseColors.grass
  smoke: baseColors.smoke

colors = assign {}, baseColors, themeColors,
  primary: baseColors.midnight
  secondary: themeColors.white
  default: themeColors.black
  info: themeColors.blue
  success: themeColors.green
  warning: themeColors.orange
  error: themeColors.red
  muted: themeColors.smoke

color = colors.smoke

backgroundColor = colors.white

inverted = colors.white

scale = [ 0, 10, 20, 30, 40, 50, 60 ]

fontSizes = [ 48, 32, 24, 22, 20, 16, 14 ]

fontWeights =
  thin: 100
  light: 300
  regular: 400
  medium: 500
  semibold: 600
  bold: 700
  extrabold: 800

zIndex = [ 0, 2, 4, 8, 16 ]

bold = 600

borderRadius = 4

borderColor = 'rgba(0, 0, 0, .25)'

Toolbar =
  color: colors.white
  backgroundColor: 'transparent'
  height: 60

Container =
  width: 1260
  maxWidth: 1260
  padding: 0

NavItem =
  fontWeight: 300

Panel =
  padding: 0
  backgroundColor: 'white'
  fontSize: 18
  borderRadius: 0
  border: 0

PanelHeader =
  minHeight: 80
  backgroundColor: colors.snow
  fontWeight: 600
  fontSize: 28
  padding: 0
  margin: 0
  borderRadius: 0

Button =
  color: colors.white
  fontSize: fontSizes[4]
  fontWeight: fontWeights.medium

Input =
  input:
    height: scale[4]
    fontSize: 18
    color: colors.charcoal
    border: 'none'
    borderRadius: 0
    borderBottom: "1px solid #{colors.ash}"
    padding: 0
    paddingBottom: scale[1]
    paddingTop: scale[1]
  label:
    opacity: 0.75
    fontSize: 18
    color: colors.dolphin
    letterSpacing: 0.3
    fontWeight: 100


export default config = {
  scale
  fontSizes
  bold
  fontFamily
  monospace
  zIndex
  colors
  inverted
  borderRadius
  borderColor
  pureRender: yes

  Toolbar
  Container
  NavItem
  Panel
  PanelHeader
  Button
  Input
}
