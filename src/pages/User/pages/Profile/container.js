import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { select as userSelectors } from 'modules/user'
import { select as templateSelectors } from 'modules/stack-template'
import { mapValues } from 'lodash'
import slugify from 'utils/slugify'

import ProfileCard from './components/ProfileCard'
import TemplateList from './components/TemplateList'

const mapStateToProps = (state, props) => {

  let templates = []
  let isAuthUser = false

  const account = userSelectors.byNickname(props.params.nickname)(state)

  if (account) {

    templates = userSelectors.templates(account._id)(state)
    templates = mapValues(templates, t => templateSelectors.decorate(t)(state))

    const me = userSelectors.whoami(state)

    isAuthUser = me && account ? me._id === account._id : false
  }

  return { account, templates, isAuthUser }
}

const mapDispatchToProps = (dispatch) => ({
  onTemplateClick(template) {
    browserHistory.push(`/${template.owner.profile.nickname}/${slugify(template.title)}`)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateList)

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCard)
