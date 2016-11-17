import React from 'react'
import { map } from 'lodash'
import { Flex, Box } from 'reflexbox'
import {
  Container, Section, SectionHeader, PageHeader, Stat
  Card, CardImage, Heading, Text, Space, Block, Badge
  Panel, PanelHeader
} from 'rebass'

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

TemplateCard = (props) ->
  machineCount = props.machineCount
  instanceCount = Object.keys(props.instances).length
  cloneCount = Object.keys(props.clones).length
  <Box col={12} sm={4} p={2} onClick={-> props.onClick props.id}>
    <Block rounded='top' mb={0} py={3} backgroundColor={colors[props.providers[0]]} color='white' style={{ textAlign: 'center' }}>
      {props.providers[0]}
      <Flex align='center' justify='center' py={2}>
        <Badge pill rounded p={2}>{props.accessLevel}</Badge>
      </Flex>
    </Block>
    <Block rounded='bottom' p={2} my={0} backgroundColor="white">
      <Heading level={4} children={props.title} />
      <Text small children='awesome template' />
      <Flex wrap justify='space-between' gutter={2} align='center' style={{textAlign: 'center'}}>
        <Box auto>
          <Stat mx={2} mt={2} label='VMs' value={machineCount} />
        </Box>
        <Box auto>
          <Stat mx={2} mt={2} label='Instances' value={instanceCount} />
        </Box>
        <Box auto>
          <Stat mx={2} mt={2} label='Clones' value={cloneCount} />
        </Box>
      </Flex>
    </Block>
  </Box>

