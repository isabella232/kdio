import moment from 'moment'

const formatDateRelative = function(begin, end) {
  return moment(begin).calendar(end, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'MMM Do'
  })
}

export default formatDateRelative
