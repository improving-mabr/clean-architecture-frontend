import { Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AvatarSkeleton, IconSkeleton, TextSkeleton } from '../../../../shared/components/atoms'

const UsersListSkeleton = () => <>
	<List sx={{ cursor: 'wait' }}>
		{
			[...Array(6)].map((_, index) => <React.Fragment key={index}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<AvatarSkeleton />
					</ListItemAvatar>
					<ListItemText
						primary={<TextSkeleton width="80%"  />}
						secondary={<TextSkeleton width="60%" />}
					/>
					<ListItemIcon>
						<IconSkeleton />
					</ListItemIcon>
				</ListItem>
				<Divider variant="inset" component="li" />
			</React.Fragment>)
		}
	</List>
</>

export default UsersListSkeleton
