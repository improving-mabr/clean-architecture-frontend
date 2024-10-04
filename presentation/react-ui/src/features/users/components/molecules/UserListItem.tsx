import { ChevronRight } from '@mui/icons-material'
import { Divider, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { UserModel } from '@tech-talk/core'
import UserAvatar from '../atoms/UserAvatar'

export default function UserListItem({user, onSelect}: UserListItemProp): JSX.Element {
	return <>
		<ListItemButton alignItems='flex-start' onClick={() => onSelect(user)}>
			<ListItemAvatar>
				<UserAvatar initials={ user.Initials }  />
			</ListItemAvatar>
			<ListItemText 
				primary={user.Name}
				secondary={user.Email} />
			<ListItemIcon>
				<ChevronRight />
			</ListItemIcon>
		</ListItemButton>
		<Divider variant="inset" component="li" />
	</>
}


interface UserListItemProp {
	user: UserModel
	onSelect: (user: UserModel) => void
}
