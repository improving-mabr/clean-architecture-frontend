import { UserModel } from "@tech-talk/core"
import { useState } from "react"
import usePostsByUserId from "../../posts/hooks/usePostsByUserId"
import useUserList from "./useUserList"

const useUserPage = () => {
	const [selectedUser, setSelectedUser] = useState<UserModel | null>(null)
	const { users, status: usersStatus } = useUserList()
	const { posts, status: postsStatus } = usePostsByUserId(selectedUser?.Id)

	const onUserSelect = (user: UserModel): void => setSelectedUser(user)

	const onBackClick = (): void => setSelectedUser(null)

	return {
		onBackClick,
		onUserSelect,
		posts,
		postsStatus,
		selectedUser,
		users,
		usersStatus,
	}
}

export default useUserPage