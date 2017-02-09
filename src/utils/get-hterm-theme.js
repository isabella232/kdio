const themes = {
  'default': {
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
    backgroundColor: '#000'
  },
  'atom-one': (function() {
    const backgroundColor = '#fff'
    const foregroundColor = '#383a42'
    const red = '#e45649'
    const green = '#50a14f'
    const yellow = '#c18401'
    const blue = '#4078f2'
    const magenta = '#a626a4'
    const cyan = '#0184bc'
    const white = '#a0a1a7'
    const lightBlack = '#696c77'
    return {
      backgroundColor: backgroundColor,
      foregroundColor: foregroundColor,
      borderColor: backgroundColor,
      cursorColor: '#526eff',
      colors: {
        red: red,
        green: green,
        yellow: yellow,
        blue: blue,
        magenta: magenta,
        cyan: cyan,
        white: white,
        lightBlack: lightBlack,
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
  })()
}

const getHtermTheme = function(name) {
  return themes[name] || themes['default']
}

export default getHtermTheme
