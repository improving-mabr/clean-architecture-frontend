import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { AvatarSkeleton, IconSkeleton, TextSkeleton } from '../../../../shared/components/atoms'

const PostsListSkeleton = (): JSX.Element => <>
	{
		[...Array(3)].map((_, index) => <Card key={index} sx={{ borderBottom: 'solid 1px #ddd', padding: '13px 0' }}>
			<CardHeader
				avatar={<AvatarSkeleton />}
				title={<TextSkeleton width="80%" />}
			/>
			<CardContent>
			<Typography variant="body2" color="text.secondary">
				<TextSkeleton width="100%" />
				<TextSkeleton width="69%" />
				<TextSkeleton width="80%" />
			</Typography>
			</CardContent>
			<CardActions>
			<IconButton>
				<IconSkeleton />
			</IconButton>
			<IconButton>
				<IconSkeleton />
			</IconButton>
			</CardActions>
		</Card>)
	}
</>

export default PostsListSkeleton