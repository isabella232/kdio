const colors = {

  white: '#fff',
  pink: '#f2778a',
  green: '#48ba7d',
  blue: '#67a2ee',
  midnight: '#1e2e42',

  gray1: '#515151',
  gray2: '#727272',
  gray3: '#e6e6e6',

  bg1: '#f8f8f8',
  bg2: '#fcfcfc',

}

const fontSizes = {
  heading: [28, 24, 20, 18],
  text: [16, 15, 14, 12]
}

const fontWeights = {
  heading: [300, 500, 300, 500],
  text: [600, 300, 200, 300]
}

export default {

  borderRadius: 4,

  colors: {
    ...colors,
    info: colors.blue,
    success: colors.green,
    danger: colors.pink
  },

  font: {
    sizes: fontSizes,
    weights: fontWeights,
  },

  content: {
    width: {
      lg: 1260,
      md: 1024,
      sm: 768
    }
  }
}
