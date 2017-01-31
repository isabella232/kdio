import moment from 'moment'

export default formatDateRelative = (begin, end) ->
  
  moment(begin).calendar end,
    sameDay: '[Today]'
    nextDay: '[Tomorrow]'
    nextWeek: 'dddd'
    lastDay: '[Yesterday]'
    lastWeek: '[Last] dddd'
    sameElse: 'MMM Do'
