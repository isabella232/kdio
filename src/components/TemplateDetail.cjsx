import React, { PropTypes, Component } from 'react'
import { Pre, Heading, Text, Block as BaseBlock, Badge, withRebass, Panel, PanelHeader } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import ReactMarkdown from 'react-markdown'
import { Container, Grid, GridGroup } from 'gridsys'
import toJsxString from 'react-element-to-jsx-string'

Block = withReflex()(BaseBlock)

propTypes =
  id: PropTypes.string
  content: PropTypes.string
  description: PropTypes.string


export default TemplateDetail = (props) ->

  source = """
  ```yaml
  #{props.content}
  ```
  """
  <Container>
    <Panel>
      <PanelHeader>
        Stack Template
      </PanelHeader>
      <ReactMarkdown source={source} />
    </Panel>
    <Panel>
      <PanelHeader>
        Readme
      </PanelHeader>
      <ReactMarkdown source={props.description} />
    </Panel>
  </Container>
