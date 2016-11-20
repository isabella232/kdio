import React from 'react'
import { Divider, InlineForm, Section } from 'rebass'

class Header extends React.Component

  constructor: (props) ->

    super props

    @state = { query : '' }

  onInputChange: (event) ->
    @setState {query: event.target.value}

  onClick: (event) ->
    debugger;

  render: ->

    <div className='header'>
      <Section>
        <InlineForm
          buttonLabel='Search'
          label='InlineForm'
          name='inline_form'
          placeholder='Search kd.io'
          value={@state.query}
          onChange={@onInputChange.bind this}
          onClick={@onClick.bind this, event} />
      </Section>
      <Divider />
    </div>

export default Header