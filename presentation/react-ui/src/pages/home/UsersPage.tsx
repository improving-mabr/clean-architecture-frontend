import PostsList from "../../features/posts/components/organisms/PostsList";
import UsersList from "../../features/users/components/organisms/UsersList";
import useUserPage from "../../features/users/hooks/useUserPage";

const UsersPage = () => {
	const { onBackClick, onUserSelect, selectedUser, users, usersStatus, posts, postsStatus } = useUserPage()
	
	return <>
		{
			!selectedUser 
				? <UsersList status={usersStatus} {...{ onUserSelect, users }} />
				: <PostsList status={postsStatus} {...{ onBackClick, posts, selectedUser }} />
		}
	</>
}
export default UsersPage
