import { GetPostsByUserIdUseCase, PostRepository, PostStore, type UserModel } from '@tech-talk/core'
import { reactive } from 'vue'

/**
 * 
 */
export class PostService {
	private getPostsByUserIdUseCase: GetPostsByUserIdUseCase
	public store: PostStore

	constructor() {
		this.store = new PostStore()
		const repository = new PostRepository()
		this.getPostsByUserIdUseCase = new GetPostsByUserIdUseCase(repository, this.store)
	}

	public getPostsByUser(user: UserModel): void {
		this.getPostsByUserIdUseCase.execute(user.Id)
	}
}

type PostStoreType = InstanceType<typeof PostStore>

export function usePostQueries(): {
	store: PostStore
	getPostsByUser: (user: UserModel) => void
} {
	const store = reactive(new PostStore()) as PostStoreType
	const repository = new PostRepository()
	const getPostsByUserIdUseCase = new GetPostsByUserIdUseCase(repository, store)

	const getPostsByUser = (user: UserModel) : void => {
		getPostsByUserIdUseCase.execute(user.Id)
	}

	return {
		store,
		getPostsByUser
	}
}
