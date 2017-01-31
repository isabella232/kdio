themes =
  'default':
    cursorColor: '#F81CE5',
    fontSize: 12,
    padding: '12px 14px',
    fontFamily: '"Roboto Mono for Powerline", monospace',
    fontSmoothing: 'antialiased',
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },
    foregroundColor: '#fff',
    backgroundColor: '#000',

  'atom-one': do ->

    backgroundColor = '#fff'
    foregroundColor = '#383a42'
    red = '#e45649'
    green = '#50a14f'
    yellow = '#c18401'
    blue = '#4078f2'
    magenta = '#a626a4'
    cyan = '#0184bc'
    white = '#a0a1a7'
    lightBlack = '#696c77'

    return {
      backgroundColor,
      foregroundColor,
      borderColor: backgroundColor,
      cursorColor: '#526eff',
      colors: {
        red, green, yellow, blue, magenta, cyan, white, lightBlack,
        black: foregroundColor,
        lightRed: red,
        lightGreen: green,
        lightYellow: yellow,
        lightBlue: blue,
        lightMagenta: magenta,
        lightCyan: cyan,
        lightWhite: backgroundColor
      }
    }

export default getHtermTheme = (name) -> themes[name] or themes['default']
