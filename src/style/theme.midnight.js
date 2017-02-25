import baseColors from './colors'

const themeColors = {
  black: baseColors.space,
  white: baseColors.white,
  gray: baseColors.ash,
  midgray: baseColors.dolphin,
  blue: baseColors.sky,
  red: baseColors.rose,
  orange: baseColors.aws,
  green: baseColors.grass,
  smoke: baseColors.smoke
}

const colors = {
  ...baseColors,
  ...themeColors,
  primary: baseColors.midnight,
  secondary: themeColors.white,
  "default": themeColors.black,
  info: themeColors.blue,
  success: themeColors.green,
  warning: themeColors.orange,
  error: themeColors.red,
  muted: themeColors.smoke
}

const fontFamily = '"proxima-nova", sans-serif'
const monospace = '"Roboto Mono", Menlo, Consolas, monospace'
const color = colors.smoke
const backgroundColor = colors.white
const inverted = colors.white
const scale = [0, 10, 20, 30, 40, 50, 60]
const fontSizes = [48, 32, 24, 22, 20, 16, 14]
const zIndex = [0, 2, 4, 8, 16]
const bold = 600
const borderRadius = 4
const borderColor = 'rgba(0, 0, 0, .25)'

const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}

const Toolbar = {
  color: colors.white,
  backgroundColor: 'transparent',
  height: 60
}

const Container = {
  width: 1260,
  maxWidth: 1260,
  padding: 0
}

const NavItem = {
  fontWeight: 300
}

const Panel = {
  padding: 0,
  backgroundColor: 'white',
  fontSize: 18,
  borderRadius: 0,
  border: 0
}

const PanelHeader = {
  minHeight: 80,
  backgroundColor: colors.snow,
  fontWeight: 600,
  fontSize: 28,
  padding: 0,
  margin: 0,
  borderRadius: 0
}

const Button = {
  color: colors.white,
  fontSize: fontSizes[4],
  fontWeight: fontWeights.medium
}

const Input = {
  input: {
    height: scale[4],
    fontSize: 18,
    color: colors.charcoal,
    border: 'none',
    borderRadius: 0,
    borderBottom: "1px solid " + colors.ash,
    padding: 0,
    paddingBottom: scale[1],
    paddingTop: scale[1]
  },
  label: {
    opacity: 0.75,
    fontSize: 18,
    color: colors.dolphin,
    letterSpacing: 0.3,
    fontWeight: 100
  }
}

export default {
  scale,
  fontSizes,
  bold,
  fontFamily,
  monospace,
  zIndex,
  colors,
  inverted,
  borderRadius,
  borderColor,
  Toolbar,
  Container,
  NavItem,
  Panel,
  PanelHeader,
  Button,
  Input,
  pureRender: true,
}
