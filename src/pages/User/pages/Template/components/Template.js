import React from 'react'

import Container from 'components/Container'
import Block from 'components/Block'
import Heading from 'components/Heading'
import TemplateDetailCard from 'components/TemplateDetailCard'
import EmptyWithMessage from 'components/EmptyWithMessage'

import UserPageHeader from 'pages/User/components/Header'

import MachineList from './MachineList'
import TemplateDetail from './Detail'
import Snippets from './Snippets'

const UserTemplate = (props) => {

  const { loading, error, template, nickname } = props

  if (error) {
    return <UserTemplateError />
  }

  if (!template) {
    return <UserTemplateLoading />
  }

  return (
    <section>
      <UserPageHeader>
        <TemplateDetailCard
          nickname={nickname}
          template={template} />
      </UserPageHeader>
      <Container>
        <Block flex>
          <Block auto style={{borderRight: '1px solid #E6E6E6'}}>
            <TemplateDetail {...template} />
          </Block>
          <Block pl={3} pt={3}>
            <MachineList machines={template.machines} />
            <Snippets template={template} />
          </Block>
        </Block>
      </Container>
    </section>
  )
}

// TODO: Better error message.
const UserTemplateError = () => (
  <section>
    <UserPageHeader>
      <Heading level={1}>Ooops!</Heading>
    </UserPageHeader>
    <EmptyWithMessage
      title="Our servers having problem right now."
      message="Please try again in a moment." />
  </section>
)

const UserTemplateLoading = () => (
  <section>
    <UserPageHeader>
      <Heading level={1}>Loading...</Heading>
    </UserPageHeader>
    <EmptyWithMessage
      title="Content is being prepared"
      message="..." />
  </section>
)


export default UserTemplate
