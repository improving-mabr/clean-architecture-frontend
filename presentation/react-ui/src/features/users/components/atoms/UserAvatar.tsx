import { Avatar } from '@mui/material'

interface UserAvatarProps {
	initials: string
}

const UserAvatar = ({ initials }: UserAvatarProps) => <Avatar sx={{ bgcolor: "#1976d2" }}>
	{ initials }
</Avatar>

export default UserAvatar