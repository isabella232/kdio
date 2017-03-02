import React from 'react'

import UserPageHeader from 'pages/User/components/Header'

import Heading from 'components/Heading'
import Container from 'components/Container'
import EmptyWithMessage from 'components/EmptyWithMessage'

import TemplateList from './TemplateList'
import ProfileCard from './ProfileCard'

const UserProfile = (props) => {

  const { loading, error, account } = props

  if (error) {
    return <UserProfileError />
  }

  const { templates, isAuthUser, onTemplateClick } = props

  return (
    <section>
      <UserPageHeader>
        {account
          ? <ProfileCard account={account} />
          : 'Loading...'}
      </UserPageHeader>
      <Container>
        <TemplateList
          loading={loading}
          templates={templates}
          isAuthUser={isAuthUser}
          onTemplateClick={onTemplateClick.bind(null, account)} />
      </Container>
    </section>
  )
}

// TODO: Better error message.
const UserProfileError = () => (
  <section>
    <UserPageHeader>
      <Heading level={1}>Ooops!</Heading>
    </UserPageHeader>
    <EmptyWithMessage
      title="Our servers having problem right now."
      message="Please try again in a moment." />
  </section>
)

export default UserProfile
