import { Injectable } from '@angular/core';
import { GetUsersListUseCase, UserRepository, UserStore } from '@tech-talk/core';

/**
 * 
 */
@Injectable({ providedIn: 'root' })
export class UserService {

	/**
	 * 
	 */
	private getUsersListUseCase: GetUsersListUseCase

	/**
	 * 
	 */
	public store: UserStore = new UserStore()

	/**
	 * 
	 */
	constructor() { 
		const repository: UserRepository = new UserRepository()
		this.getUsersListUseCase = new GetUsersListUseCase(repository, this.store)
	}

	/**
	 * 
	 */
	getUsersList(): void {
		const paging = { page: 1, size: 6 }
		this.getUsersListUseCase.execute(paging)
	}
}
