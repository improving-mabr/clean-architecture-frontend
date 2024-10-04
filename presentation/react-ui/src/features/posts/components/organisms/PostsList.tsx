import { ArrowBack } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { ApiStatus, PostModel, UserModel } from "@tech-talk/core";
import ErrorState from '../../../../shared/components/molecules/ErrorState';
import PostListItem from '../molecules/PostListItem';
import PostsListSkeleton from '../molecules/PostsListSkeleton';

function PostsList({ onBackClick, posts, status, selectedUser }: PostsListProps) {
	return <>
		<IconButton aria-label="add to favorites" onClick={onBackClick}>
			<ArrowBack />
		</IconButton>
		{ status === 'pending' && <PostsListSkeleton /> }
		{ status === 'rejected' && <ErrorState /> }
		{
			status === 'succeeded' && posts.map((post, _) => <PostListItem 
				initials={selectedUser?.Initials || ''} 
				key={post.Id} 
				{...{post}}
			/>)
		}
	</>
}
export default PostsList


interface PostsListProps {
	onBackClick: () => void
	posts: PostModel[]
	status: ApiStatus
	selectedUser: UserModel | null
}