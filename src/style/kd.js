import config from './config'

const colors = {
  white: '#fff',
  base: '#727272',
  background: '#f1f3f4',
  red: '#e54',
  blue: '#67A2EE',
  green: '#0b7',
  orange: '#FFC442',
  midgray: '#444',
  gray: '#eee',
  lightGray: '#e6e6e6',
  navy: '#1E2E42',
  aws: '#FF9900',
  digitalocean: '#0080FF',
  azure: '#00AAEF',
  google: '#DD4330',
  softlayer: '#B4111B'
}

const kdStyleConfig = {
  name: 'kd.io',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  color: colors.base,
  backgroundColor: colors.background,
  borderRadius: 4,
  colors: {
    ...config.colors,
    ...colors,
    primary: colors.lightGray,
    error: colors.red,
    info: colors.blue,
    success: colors.green,
    secondary: colors.midgray,
    digitalOcean: colors.blue
  },
  scale: config.scale,
  borderColor: `rgba(0, 0, 0, ${1/8})`,
  Toolbar: {
    color: colors.white,
    backgroundColor: colors.navy,
    height: 60
  },
  PageHeader: {
    borderColor: 'inherit'
  },
  SectionHeader: {
    borderColor: 'inherit'
  },
  Panel: {
    borderWidth: 0
  },
  PanelHeader: {
    fontWeight: 300,
    fontSize: 22
  },
  Container: {
    width: 1260,
    maxWidth: 1260,
    padding: 0
  },
  Stat: {
    label: {
      fontWeight: 400,
      fontSize: 14
    },
    value: {
      fontWeight: 400,
      fontSize: 20
    }
  },
  NavItem: {
    fontWeight: 300
  },

  Breadcrumbs: {
    color: colors.white,
    fontSize: config.fontSizes[4],
    spacer: {
      color: colors.base,
      marginLeft: '0',
      marginRight: '0'
    }
  },

  Input: {
    input: {
      height: 40,
      color: '#515151',
      fontSize: 14,
      padding: '0 14px',
      fontWeight: 300
    }
  },

  Button: {
    height: 30,
    fontSize: 14,
    fontWeight: 600,
    padding: '0 15px'
  },

  DropdownMenu: {
    Menu: {
      boxShadow: '0 0 15px 0 rgba(0,0,0,0.15)',
      border: '1px solid #A8CEFF',
      borderRadius: 4,
    },
  },

}

export default kdStyleConfig
