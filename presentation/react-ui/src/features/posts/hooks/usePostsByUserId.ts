import { ApiStatus, GetPostsByUserIdUseCase, ICommonState, PostModel, PostRepository, PostStore } from '@tech-talk/core';
import { useEffect, useState } from 'react';

const usePostsByUserId = (userId: number | undefined) => {
	const store = new PostStore();
	const repository = new PostRepository();
	const getPostsByUserIdUseCase = new GetPostsByUserIdUseCase(repository, store)

	const [posts, setPosts] = useState<PostModel[]>([])
	const [status, setStatus] = useState<ApiStatus>('idle')

	useEffect(() => {
		if (userId === undefined) return

		const subscription = store.collection$.subscribe((state: ICommonState<PostModel[]>) => {
			setPosts(state.data || [])
			setStatus(state.status)
		});

		getPostsByUserIdUseCase.execute(userId);

		return () => {
			store.unsubscribeAll()
			subscription.unsubscribe()
		};
	}, [userId])

	return { 
		posts, 
		status 
	}
}

export default usePostsByUserId
