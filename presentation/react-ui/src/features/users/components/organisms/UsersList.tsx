import List from '@mui/material/List';
import { ApiStatus, UserModel } from '@tech-talk/core';
import ErrorState from '../../../../shared/components/molecules/ErrorState';
import UserListItem from '../molecules/UserListItem';
import UsersListSkeleton from '../molecules/UsersListSkeleton';

export default function UsersList({ onUserSelect, status, users}: UsersListProps) {
	return <>
		{ status === 'pending' && <UsersListSkeleton /> }
		{ status === 'rejected' && <ErrorState /> }
		{ 
			status === 'succeeded' && <List sx={{ bgcolor: 'background.paper' }}>
				{users.map((user, _) => <UserListItem key={user.Id} 
					onSelect={onUserSelect}
					{...{ user }}
				/>)}
			</List>
		}
	</>
}


interface UsersListProps {
	onUserSelect: (user: UserModel) => void
	status: ApiStatus
	users: UserModel[]
}
