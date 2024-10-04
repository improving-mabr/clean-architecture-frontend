import { Observable, Subscription } from "rxjs";
import { ApiStatus, ICommonState } from "../../../common";
import { Store } from "../../../common/store";
import { PostModel } from "../../domain";
import { initialState, IPostState } from "./IPostState";

/**
 * 
 */
export class PostStore {
	/**
	 * 
	 */
	private store: Store<IPostState> = new Store<IPostState>(initialState)

	/**
	 * 
	 */
	private collectionSubscription!: Subscription

	/**
	 * 
	 */
	public collection$: Observable<ICommonState<PostModel[]>> = this.store
		.select((state: IPostState) => state.collection)

	/**
	 * 
	 * @param data 
	 */
	public setCollectionData(data: PostModel[]): void { 
		this.store.update((state: IPostState) => ({
			...state,
			collection:{
				data,
				status: data.length > 0 ? 'succeeded' : 'empty'
			}
		}))
	}

	/**
	 * 
	 * @param status 
	 */
	public setCollectionStatus(status: ApiStatus): void { 
		this.store.update((state: IPostState) => ({
			...state,
			collection: {
				...state.collection,
				status
			}
		}))
	}

	/**
	 * 
	 * @param subscription 
	 */
	public setCollectionSubscription(subscription: Subscription): void { 
		this.collectionSubscription = subscription
	}

	/**
	 * 
	 */
	public unsubscribeAll(): void {
		if (this.collectionSubscription) this.collectionSubscription.unsubscribe()
	}
}
