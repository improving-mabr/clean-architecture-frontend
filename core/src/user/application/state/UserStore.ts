import { Observable, Subscription } from "rxjs";
import { ApiStatus, ICommonState } from "../../../common/state";
import { Store } from "../../../common/store";
import { UserModel } from "../../domain/models/UserModel";
import { initialState, IUserState } from "./IUserState";

/**
 * 
 */
export class UserStore {
	/**
	 * 
	 */
	private store: Store<IUserState> = new Store<IUserState>(initialState)

	/**
	 * 
	 */
	private collectionSubscription!: Subscription

	/**
	 * 
	 */
	private detailsSubscription!: Subscription
	
	/**
	 * 
	 */
	public collection$: Observable<ICommonState<UserModel[]>> = this.store
		.select((state: IUserState) => state.collection)

	/**
	 * 
	 */
	public details$: Observable<ICommonState<UserModel> | null>= this.store
		.select((state: IUserState) => state.details)

	/**
	 * 
	 * @param data 
	 */
	public setCollectionData(data: UserModel[]): void {
		const status: ApiStatus = data.length > 0
			? 'succeeded'
			: 'empty'
		this.store.update((state: IUserState) => ({
			...state,
			collection: {
				data,
				status
			}
		}))
	}
	
	/**
	 * 
	 * @param status 
	 */
	public setCollectionStatus(status: ApiStatus): void {
		this.store.update((state: IUserState) => ({
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
	 * @param data 
	 */
	public setDetailsData(data: UserModel): void {
		this.store.update((state: IUserState) => ({
			...state,
			details: {
				data,
				status: 'succeeded'
			}
		}))
	}

	/**
	 * 
	 * @param status 
	 */
	public setDetailsStatus(status: ApiStatus): void {
		this.store.update((state: IUserState) => ({
			...state,
			details: {
				...state.details,
				status
			}
		}))
	}

	/**
	 * 
	 * @param subscription 
	 */
	public setDetailsSubscription(subscription: Subscription): void {
		this.detailsSubscription = subscription
	}

	/**
	 * 
	 */
	public unsubscribeAll(): void {
		if (this.collectionSubscription) this.collectionSubscription.unsubscribe()
		if (this.detailsSubscription) this.detailsSubscription.unsubscribe()
	}
}
