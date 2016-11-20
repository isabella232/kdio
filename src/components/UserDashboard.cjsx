import React from 'react'
import { map } from 'lodash'
import { Flex, Box } from 'reflexbox'
import {
  Section, SectionHeader, PageHeader, Stat
  Card, CardImage, Heading, Text, Space, Block, Badge
  Panel, PanelHeader
} from 'rebass'

import TemplateCard from 'components/TemplateCard'


import { Container } from 'gridsys'

colors =
  aws: 'orange'
  digitalocean: 'blue'

export default UserDashboard = (props) ->
  <Container>
    <Stacks templates={props.templates} onStackClick={props.onStackClick} />
    <Credentials credentials={props.credentials} onCredentialClick={props.onCredentialClick} />
  </Container>

Stacks = (props) ->
  <Section>
    <SectionHeader heading='Stacks' />
    <Flex wrap gutter={2} align='center'>
      {map props.templates, (t) -> <TemplateCard onClick={props.onStackClick} key={t.id} {...t} />}
    </Flex>
  </Section>

Credentials = (props) ->
  <div>
    <SectionHeader heading='Credentials' />
    <Flex wrap gutter={2} align='center'>
      {map props.credentials, (c) -> <CredentialCard onClick={props.onCredentialClick} key={c.id} {...c} />}
    </Flex>
  </div>

CredentialCard = ({ id, title, provider, accessLevel, owner, onClick }) ->
  <Box col={12} sm={6} p={2} onClick={-> onClick id}>
    <Block rounded p={2} my={0} backgroundColor="white" border>
      <Flex align='center'>
        <Heading level={4} children={title} />
        <Space />
        <Badge rounded>{accessLevel}</Badge>
        <Space />
        <Badge rounded theme={colors[provider]}>{provider}</Badge>
      </Flex>
      <Text small>Owner: {owner.profile.nickname} </Text>
    </Block>
  </Box>

