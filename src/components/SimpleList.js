import React from 'react'
import List from 'components/List'
import Block from 'components/Block'
import { isFunction } from 'lodash'


const Line = ({ children, onClick, style, py = 3 }) => {

  style = {
    borderBottom: '1px solid #e6e6e6',
    ...style
  }

  return (
    <Block onClick={onClick} align='center' justify='space-between' py={py} style={style}>
      {children}
    </Block>
  )
}


export default class SimpleList extends React.Component {

  renderHeader() {
    if (!isFunction(this.props.renderHeader)) {
      return null
    }

    return (
      <Line py={2}>
        {this.props.renderHeader()}
      </Line>
    )
  }

  renderFooter() {
    if (!isFunction(this.props.renderFooter)) {
      return null
    }

    return (
      <Line py={1}>
        {this.props.renderFooter()}
      </Line>
    )
  }

  renderRow(index) {
    if (!isFunction(this.props.renderRow)) {
      return null
    }

    return (
      <Line key={index} py={3}>
        {this.props.renderRow(index)}
      </Line>
    )
  }

  render() {
    const props = {
      ...this.props,
      renderHeader: this.renderHeader.bind(this),
      renderRow: this.renderRow.bind(this),
      renderFooter: this.renderFooter.bind(this),
    }
    return (
      <List {...props} />
    )
  }
}
