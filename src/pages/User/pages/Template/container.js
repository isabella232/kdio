import { connect } from 'react-redux'
import UserTemplate from './components/Template'
import TemplateDetailCard from 'components/TemplateDetailCard'

import { select as templateSelectors } from 'modules/stack-template'

const mapStateToProps = (state, ownProps) => {

  const template = templateSelectors.bySlug(ownProps.params.slug)(state)

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
