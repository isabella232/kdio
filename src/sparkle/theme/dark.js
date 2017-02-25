import base from './base'

export default {
  ...base,

  colors: {
    ...base.colors,
    bg: base.colors.midnight,
    heading: base.colors.white,
    text: base.colors.white,

    inverted: {
      text: base.colors.gray2
    },
  }
}
