import React from 'react'
import { Input } from 'rebass'

import Button from 'components/Button'
import Block from 'components/Block'
import Link from 'components/Link'

export default LandingForm = (props) ->

  { title, buttonTitle, fields, onSubmit } = props

  <Block p={0} className='LandingForm' style={width: 430}>
    <Header title={title} />
    <Form fields={fields} buttonTitle={buttonTitle} onSubmit={onSubmit} />
  </Block>

export FooterLinks = ({ links }) ->

  <Block my={2} color='white'>
    {links.map (link, index) ->
      <Block flex align='center' justify='center' key={index}>
        <Link small to={link.to} children={link.children} />
      </Block>
    }
  </Block>


Header = ({ title }) ->

  style = { height: 80, paddingLeft: 40, fontSize: 28, fontWeight: 500 }

  <Block
    flex align='center'
    backgroundColor='snow'
    color='smoke'
    style={style}
    children={title} />


Form = ({ fields, onSubmit, buttonTitle }) ->

  <Block backgroundColor='white' style={padding: 40}>
    <form onSubmit={onSubmit}>
      {fields.map (field, index) -> <Field key={index} field={field} />}
      <SubmitButton title={buttonTitle} />
    </form>
  </Block>

Field = ({ field }) ->

  { name, label, value, onChange, type = 'text' } = field

  <Input
    mb={3} type={type}
    name={name} label={label}
    value={value} onChange={onChange} />

SubmitButton = ({ title }) ->

  <Block flex>
    <Button
      theme='info'
      style={flex: 1, height: 50}
      type='submit'
      children={title} />
  </Block>
