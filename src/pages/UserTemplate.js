import { connect } from 'react-redux'
import UserTemplate from 'components/UserTemplate'
import TemplateDetailCard from 'components/TemplateDetailCard'

import { select as templateSelectors } from 'modules/stack-template'

const mapStateToProps = (state, ownProps) => {

  const template = templateSelectors.byId(ownProps.params.templateId)(state)

  return {
    template: template && templateSelectors.decorate(template)(state)
  }
}


export default connect(
  mapStateToProps
)(UserTemplate)

export const Header = connect(
  mapStateToProps
)(TemplateDetailCard)
