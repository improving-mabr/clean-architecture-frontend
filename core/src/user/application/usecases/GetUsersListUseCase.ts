import { Subscription } from "rxjs";
import { IUseCase } from "../../../common/use-case";
import { UserModel } from "../../domain";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserStore } from "../state/UserStore";

/**
 * 
 */
export class GetUsersListUseCase implements IUseCase<any> {
	/**
	 *
	 */
	constructor(private repository: IUserRepository, private store: UserStore) {}

	/**
	 * 
	 * @param payload 
	 */
	execute(payload: any): void {
		this.store.setCollectionStatus('pending')
		const subscription: Subscription = this.repository
			.getUsersList(payload)
			.subscribe({
				next: (response: UserModel[]) => { this.store.setCollectionData(response) },
				error: () => { this.store.setCollectionStatus('rejected') }
			})
		this.store.setCollectionSubscription(subscription)
	}
}