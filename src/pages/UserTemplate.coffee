import { connect } from 'react-redux'
import UserTemplate from 'components/UserTemplate'
import TemplateDetailCard from 'components/TemplateDetailCard'

import { select as templateSelectors } from 'modules/stack-template'

mapStateToProps = (state, ownProps) ->

  template = templateSelectors.byId(ownProps.params.templateId)(state)

  return {
    template: template and templateSelectors.decorate(template)(state)
  }

mapDispatchToProps = (dispatch) ->
  return {}


export default UserTemplatePage = connect(
  mapStateToProps
  mapDispatchToProps
)(UserTemplate)

export Header = connect(
  mapStateToProps
  mapDispatchToProps
)(TemplateDetailCard)
