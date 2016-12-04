import { connect } from 'react-redux'
import UserTemplate from 'components/UserTemplate'

import { select as templateSelectors } from 'modules/stack-template'

mapStateToProps = (state, ownProps) ->

  template = templateSelectors.byId(ownProps.params.templateId)(state)

  return {
    template: templateSelectors.decorate(template)(state)
  }

mapDispatchToProps = (dispatch) ->
  return {}


export default UserTemplatePage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserTemplate)
