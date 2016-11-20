import { assign } from 'lodash'
import config from './config'

colors =
  red: '#e54'
  blue: '#059'
  green: '#0b7'
  orange: '#FFC442'
  midgray: '#444'
  gray: '#eee'

  aws: '#FF9900'
  digitalocean: '#0080FF'
  azure: '#00AAEF'
  gcp: '#DD4330'
  softlayer: '#B4111B'

export default kdStyleConfig =
  name: 'kd.io'
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  color: '#111'
  backgroundColor: '#f5f5f5'

  borderRadius: '4px'

  colors: assign {}, config.colors, colors,
    primary: colors.red
    error: colors.red
    info: colors.blue
    success: colors.green
    secondary: colors.midgray
    digitalOcean: colors.blue

  borderColor: "rgba(0, 0, 0, #{1/8})"

  Toolbar:
    color: 'inherit'
    backgroundColor: '#fff'
    borderBottom: "1px solid rgba(0, 0, 0, #{1/8})"

  PageHeader:
    borderColor: 'inherit'

  SectionHeader:
    borderColor: 'inherit'

