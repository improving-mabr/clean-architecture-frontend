import { ApiStatus, GetUsersListUseCase, ICommonState, UserModel, UserRepository, UserStore } from "@tech-talk/core"
import { useEffect, useState } from "react"

const useUserList = () => {
	const store = new UserStore()
	const repository = new UserRepository()
	const getUsersListUseCase = new GetUsersListUseCase(repository, store)

	const [users, setUsers] = useState<UserModel[]>([])
	const [status, setStatus] = useState<ApiStatus>('idle')

	useEffect(() => {
		const subscription = store.collection$.subscribe((state: ICommonState<UserModel[]>) => {
			setUsers(state.data || [])
			setStatus(state.status)
		})

		getUsersListUseCase.execute({})
	
		return () => {
			store.unsubscribeAll()
			subscription.unsubscribe()
		}
	}, [])
	
	return {
		users,
		status
	}
}

export default useUserList
