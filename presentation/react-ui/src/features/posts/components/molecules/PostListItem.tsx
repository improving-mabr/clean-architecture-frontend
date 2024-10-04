import { Favorite, Share } from "@mui/icons-material"
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { PostModel } from "@tech-talk/core"
import UserAvatar from "../../../users/components/atoms/UserAvatar"

const PostListItem = ({ post, initials}: PostListItemProps) => <Card key={post.Id} sx={{ borderBottom: 'solid 1px #ddd', padding: '13px 0' }}>
	<CardHeader 
		avatar={<UserAvatar {...{initials}} />}
		title={post.Title}
		sx={{ '& .MuiCardHeader-title': { textTransform: 'capitalize' } }}
	/>
	<CardContent>
		<Typography variant="body2" color="text.secondary">
			{post.Body}
		</Typography>
	</CardContent>
	<CardActions>
		<IconButton>
			<Favorite />
		</IconButton>
		<IconButton>
			<Share />
		</IconButton>
	</CardActions>
</Card>

export default PostListItem

interface PostListItemProps {
	post: PostModel
	initials: string
}
