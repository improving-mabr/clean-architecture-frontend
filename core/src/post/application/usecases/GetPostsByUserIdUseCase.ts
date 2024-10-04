import { Subscription } from "rxjs";
import { IUseCase } from "../../../common/use-case";
import { PostModel } from "../../domain";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { PostStore } from "../state/PostStore";

/**
 * 
 */
export class GetPostsByUserIdUseCase implements IUseCase<number> {
	/**
	 *
	 */
	constructor(private repository: IPostRepository, private store: PostStore) {}

	/**
	 * 
	 * @param payload 
	 */
	execute(payload: number): void {
		this.store.setCollectionStatus('pending')
		const subscription: Subscription = this.repository.getPostsByUserId(payload)
			.subscribe({
				next: (response: PostModel[]) => { this.store.setCollectionData(response) },
				error: () => { this.store.setCollectionStatus('rejected') }
			})
		this.store.setCollectionSubscription(subscription)
	}
}
