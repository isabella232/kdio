import { assign, cloneDeep } from 'lodash'
import React, { Component } from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Container, Grid } from 'gridsys'
import { Flex } from 'reflexbox'
import {
  SectionHeader, Section, Text
  PanelHeader, Panel, Pre, PageHeader
} from 'rebass'

import ThemeProvider from 'components/ThemeProvider'
import AppLayout from 'components/AppLayout'
import CodeEditor from 'components/CodeEditor'

import kdTheme from 'style/kd'
import * as templateCardExample from 'components/TemplateCard.example'
import * as showMoreCardExample from 'components/ShowMoreCard.example'
import * as templateListExample from 'components/TemplateList.example'



examples = [
  templateCardExample
  showMoreCardExample
  templateListExample
]

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
      <AppLayout>
        <Header />
        {renderExamples @state.examples, @onPropsChange.bind this}
      </AppLayout>
    </ThemeProvider>


renderExamples = (examples, onChange) ->
  examples.map (example) ->
    <Example
      {...example}
      key={example.name}
      onPropsChange={onChange} />

export Header = ->

  <Section>
    <Container>
      <Grid span={12}>
        <SectionHeader
          description="React component library of kd.io"
          heading="kd.io Komponents" />
      </Grid>
    </Container>
  </Section>


export Example = ({ props, Component, description, name, onPropsChange }) ->

  propsString = JSON.stringify props, null, 2
  code = toJsxString(<Component {...props} />, { showDefaultProps: yes })

  onPropsStringChange = (value) ->
    try
      newProps = JSON.parse value
      onPropsChange name, newProps

  <Section>
    <Container>
      <Grid span={12}>
        <SectionHeader heading={name} />
        <Text children={description} />
      </Grid>
      <Grid span={12}>
        <Panel backgroundColor='#ededed'>
          <PanelHeader children='Example' />
          <Flex align='center' justify='center'>
            <Component {...props} />
          </Flex>
        </Panel>
      </Grid>
      <Grid split={2}>
        <Panel>
          <PanelHeader children='Code' />
          <Pre children={code} />
        </Panel>
      </Grid>
      <Grid split={2}>
        <Panel>
          <PanelHeader children='Props' />
          <CodeEditor
            px={1}
            mode='javascript'
            value={propsString}
            onChange={onPropsStringChange}
            viewportMargin={Infinity}
            lineNumbers={on} />
        </Panel>
      </Grid>
    </Container>
  </Section>

