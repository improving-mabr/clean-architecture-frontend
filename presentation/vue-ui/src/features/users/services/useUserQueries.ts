import { GetUsersListUseCase, UserRepository, UserStore } from '@tech-talk/core';
import { reactive } from 'vue';

type UserStoreType = InstanceType<typeof UserStore>

export function useUserQueries(): {
	store: UserStore
	getUsersList: () => void
} {
	const store = reactive(new UserStore()) as UserStoreType
	const repository = new UserRepository()
	const getUsersListUseCase = new GetUsersListUseCase(repository, store)

	const getUsersList = (): void => {
		const paging = { page: 1, size: 6 }
		getUsersListUseCase.execute(paging)
	}

	return {
		store,
		getUsersList
	}
}
