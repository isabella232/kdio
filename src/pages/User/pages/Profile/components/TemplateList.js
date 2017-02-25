import React from 'react'
import { map, size } from 'lodash'
import { Box } from 'reflexbox'
import { Heading, Pre } from 'rebass'

import Block from 'components/Block'
import SimpleList from 'components/SimpleList'
import EmptyWithMessage from 'components/EmptyWithMessage'
import TemplateCard from 'components/TemplateCard'


export default class TemplateList extends React.Component {

  renderEmpty() {
    const { isAuthUser } = this.props

    return isAuthUser
      ? <EmptyListAuthUser />
      : <EmptyListGeneric />
  }

  renderRow(index) {
    const { templates, onTemplateClick } = this.props

    const keys = Object.keys(templates)
    const template = templates[keys[index]]

    const props = {
      key: template.id,
      ...template,
      onClick: onTemplateClick.bind(null, template)
    }

    return (
      <TemplateCard {...props} />
    )
  }

  render() {
    return (
      <SimpleList
        rowCount={size(this.props.templates)}
        renderRow={this.renderRow.bind(this)}
        renderEmpty={this.renderEmpty.bind(this)}
      />
    )
  }

}

const EmptyListGeneric = () => (
  <EmptyWithMessage
    title="This user has not published any stack template yet!"
    message="Check back later, we will list them here once there is one." />
)

const EmptyListAuthUser = () => (
  <EmptyWithMessage
    title="You haven't created any stack template yet!"
    message="If you want to create one, please run the code below on your terminal."
    command='kd template create' />
)
