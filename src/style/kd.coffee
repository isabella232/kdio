import { assign } from 'lodash'
import config from './config'

colors =

  base: '#727272'
  background: '#f1f3f4'

  red: '#e54'
  blue: '#67A2EE'
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
  color: colors.base
  backgroundColor: colors.background

  borderRadius: 4

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
    height: 60

  PageHeader:
    borderColor: 'inherit'

  SectionHeader:
    borderColor: 'inherit'

  PanelHeader:
    fontSize: 16
    fontWeight: 400
    color: '#3C3C59'

  Container:
    width: 1260
    maxWidth: 1260

  Stat:
    label:
      fontWeight: 400
      fontSize: 14
    value:
      fontWeight: 400
      fontSize: 20

  Breadcrumbs:
    color: colors.blue
    fontSize: config.fontSizes[4]
    spacer:
      color: colors.base
      marginLeft: '0'
      marginRight: '0'

