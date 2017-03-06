import { find } from 'lodash'
import { browserHistory } from 'react-router'

import connectSearch from 'utils/connect-search'
import SearchBox from 'sparkle/SearchBox'

import { searchTemplates } from 'modules/template'

const ConnectedSearch = connectSearch({
  placeholder: 'Search stack templates...',
  onFetchRequest({ value }, { dispatch }) {
    return dispatch(searchTemplates(value)).then(result => {
      return result.templates.map(template => {
        const owner = find(result.users, { _id: template.originId })
        return {
          title: template.title,
          username: owner.profile.nickname,
          slug: template.slug
        }
      })
    })
  },
  onItemSelected({ item }, { dispatch }) {
    browserHistory.push(`/${item.username}/${item.slug}`)
  }
})(SearchBox)

export default ConnectedSearch
