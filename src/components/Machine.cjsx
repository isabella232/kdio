import React from 'react'
import { Block, Text, Heading, Space, Section, SectionHeader } from 'rebass'
import Collapsible from 'react-collapsible'
import timeago from 'timeago'
import { Flex } from 'reflexbox'

class Machine extends React.Component

  render: ->

    { machine } = @props
    { status: { state, modifiedAt, reason }, label, ipaddress, users } = machine

    status = getStatus state, reason

    <div className='machine'>
      <Collapsible trigger={label}>
        <Flex align='center'>
          <StatusBadge status={status} state={state} />
          <Text small>
            Share With {users.length} person (include me)
          </Text>
          <Space x={1} />
          <Space x={1} />
          <Text small>
            Updated: {timeago new Date modifiedAt}
          </Text>
        </Flex>
      </Collapsible>

    </div>

StatusBadge = ({ status, state }) ->
  <div className='status'>
    <Badge sm />
    <Space x={1} />
    <Text small>{state}</Text>
    <Space x={1} />
    <Space x={1} />
  </div>


Badge = ({ sm }) ->
  className = 'badge'
  className = 'small-badge' if sm
  <span className={className} style={backgroundColor: '#244776'}></span>


getStatus = (state, reason) ->
  return 'error'  if reason

  return if state is 'NotInitialized'
  then 'warning'
  else if state is 'Running'
  then 'success'
  else if state is 'Terminated'
  then 'error'


export default Machine
