import { Injectable } from '@angular/core';
import { GetPostsByUserIdUseCase, PostRepository, PostStore, UserModel } from '@tech-talk/core';

/**
 * 
 */
@Injectable({ providedIn: 'root' })
export class PostService {

	/**
	 * 
	 */
	private getPostsByUserIdUseCase: GetPostsByUserIdUseCase

	/**
	 * 
	 */
	public store: PostStore = new PostStore()

	/**
	 * 
	 */
	constructor() { 
		const repository: PostRepository = new PostRepository()
		this.getPostsByUserIdUseCase = new GetPostsByUserIdUseCase(repository, this.store)
	}

	/**
	 * 
	 */
	public getPostsByUser(user: UserModel): void {
		this.getPostsByUserIdUseCase.execute(user.Id)
	}
}
