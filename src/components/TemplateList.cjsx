import React, { PropTypes } from 'react'
import { Stat, Heading, Text, Block as BaseBlock, Badge, withRebass } from 'rebass'
import { Flex, Box, withReflex } from 'reflexbox'
import { Container, Grid, GridGroup } from 'gridsys'
import { map } from 'lodash'
import TemplateCard from 'components/TemplateCard'
import ShowMoreCard from 'components/ShowMoreCard'

Block = withReflex()(BaseBlock)

export default TemplateList = (props) ->

	<Container>
		<GridGroup gutter='10px' span={12}>
			{map props.templates, (t) ->
				<Grid split={3}>
					<TemplateCard  onClick={props.onStackClick} key={t.id} {...t} />
				</Grid>}
			<Grid split={3}>
				<ShowMoreCard title='Templates' count='5' />
			</Grid>
		</GridGroup>
	</Container>
