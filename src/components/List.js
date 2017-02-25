import React, { PropTypes, Component } from 'react'
import { range, isFunction } from 'lodash'

import Block from 'components/Block'

class List extends Component {

  renderHeader() {
    return this.props.renderHeader
      ? this.props.renderHeader()
      : null
  }

  renderFooter() {
    return this.props.renderFooter
      ? this.props.renderFooter()
      : null
  }

  renderRow(index) {
    return this.props.renderRow
      ? this.props.renderRow(index)
      : null
  }

  renderEmpty() {
    if (!isFunction(this.props.renderEmpty)) {
      return null
    }

    return (
      <Block flex flexColumn>
        {this.props.renderEmpty()}
      </Block>
    )

    return this.props.renderEmpty
      ? this.props.renderEmpty()
      : null
  }

  renderLoading() {
    if (!isFunction(this.props.renderLoading)) {
      return null
    }

    return (
      <Block flex flexColumn>
        {this.props.renderLoading()}
      </Block>
    )
  }


  render() {

    const { isLoading, rowCount } = this.props

    if (isLoading) {
      return this.renderLoading()
    }

    if (!rowCount) {
      return this.renderEmpty()
    }

    return(
      <Block flex flexColumn>
        {this.renderHeader()}
        {range(rowCount).map(index => this.renderRow(index))}
        {this.renderFooter()}
      </Block>
    )
  }
}

export default List
