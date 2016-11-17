import { assign } from 'lodash'
import baseConfig from './style-config'

colors =
  red: '#e54'
  blue: '#059'
  green: '#0b7'
  orange: '#FFC442'
  midgray: '#444'
  gray: '#eee'

export default kdStyleConfig =
  name: 'kd.io'
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  color: '#111'
  backgroundColor: '#f5f5f5'

  colors: assign {}, baseConfig.colors, colors,
    primary: colors.red
    error: colors.red
    info: colors.blue
    success: colors.green
    secondary: colors.midgray
    digitalOcean: colors.blue
    aws: colors.orange

  borderColor: "rgba(0, 0, 0, #{1/8})"

  Toolbar:
    color: 'inherit'
    backgroundColor: '#fff'
    borderBottom: "1px solid rgba(0, 0, 0, #{1/8})"

  PageHeader:
    borderColor: 'inherit'

  SectionHeader:
    borderColor: 'inherit'

