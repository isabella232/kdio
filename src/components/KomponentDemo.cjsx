import { assign, cloneDeep } from 'lodash'
import React, { Component } from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Flex, Box, Grid } from 'reflexbox'
import {
  SectionHeader, Section, Text, Container
  PanelHeader, Panel, Pre, PageHeader
} from 'rebass'

import ThemeProvider from 'components/ThemeProvider'
import AppLayout from 'components/AppLayout'
import CodeEditor from 'components/CodeEditor'

import kdTheme from 'style/kd'

req = require.context './', true, /\.example\.(coffee|cjsx)$/
examples = req.keys().map(req)

export default class KomponentDemo extends Component

  constructor: (props) ->
    super props
    @state = { examples: cloneDeep(examples) }

  onPropsChange: (name, newProps) ->

    examples = @state.examples
      .filter (example) -> example.name is name
      .map (example) -> assign {}, example, { props: newProps }

    @setState { examples }


  render: ->
    { theme = kdTheme } = @props

    <ThemeProvider theme={theme}>
      <Container p={0}>
        <Header />
        {renderExamples @state.examples, @onPropsChange.bind this}
      </Container>
    </ThemeProvider>


renderExamples = (examples, onChange) ->
  examples.map (example) ->
    <Example {...example} key={example.name} onPropsChange={onChange} />

export Header = ->

  <Section>
    <SectionHeader
      description="React component library of kd.io"
      heading="kd.io Komponents" />
  </Section>

decorateOnChange = (onChange) -> (value) ->
  try
    newProps = JSON.parse value
    onChange name, newProps


export Example = ({ props, Component, description, name, onPropsChange }) ->

  try
    propsString = JSON.stringify props, null, 2
  catch
    propsString = JSON.stringify "Props preview is not available"

  code = toJsxString(<Component {...props} />, { showDefaultProps: yes })

  <Section>
    <Grid mb={4} col={12}>
      <SectionHeader heading={name} />
      <Text children={description} />
    </Grid>
    <Grid col={12}>
      <Panel backgroundColor='#ededed'>
        <PanelHeader children='Example' />
        <Box>
          <Component {...props} />
        </Box>
      </Panel>
    </Grid>
    <Grid col={6}>
      <Panel>
        <PanelHeader children='Code' />
        <Pre children={code} />
      </Panel>
    </Grid>
    <Grid col={6}>
      <Panel>
        <PanelHeader children='Props' />
        <CodeEditor
          px={1}
          mode='javascript'
          value={propsString}
          onChange={decorateOnChange onPropsChange}
          viewportMargin={Infinity}
          lineNumbers={on} />
      </Panel>
    </Grid>
  </Section>

