import escapeRegexp from 'escape-string-regexp'


const GROUP_DELIMITER = /(?:[^\s"]+|"[^"]*")+/g
const FILTER_DELIMITER = ":"

const lookupProps = [
  'title',
  'description'
]

const allowedFilters = {
  by: val => ({ username: val }),
  provider: val => ({ 'config.requiredProviders': { $in: [val] } }),
  value: val => ({
    $or: lookupProps.map(key => ({ [key]: { $regex: escapeRegexp(val) }}) )
  })
}

const parseSearchQuery = (query) => {
  const groups = query.match(GROUP_DELIMITER)

  return groups.reduce((parsed, group) => {
    const [ key, value ] = group.split(FILTER_DELIMITER)

    // if it doesn't match our filter definitions, we will think it as if it's a
    if (!value) {
      return { ...parsed, ...allowedFilters['value'](key) }
    }

    if (!allowedFilters[key]) {
      return parsed
    }

    return { ...parsed, ...allowedFilters[key](value) }

  }, {})
}

export default parseSearchQuery
