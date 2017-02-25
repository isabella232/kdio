export const refineValue = (refine) => ({ value }) => {
  return refine(value)
}

export const cleanValue = (refine) => () => {
  return refine('')
}

export const toSuggestions = ({ hits }) => hits
