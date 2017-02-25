import base from './base'

console.log({ base })

export default {
  ...base,

  colors: {
    ...base.colors,
    bg: base.colors.white,
    heading: base.colors.gray1,
    text: base.colors.gray2,

    inverted: {
      text: base.colors.white
    },
  },
}
