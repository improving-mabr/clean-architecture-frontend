import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { ApiStatus, ICommonState, UserModel } from '@tech-talk/core'
import { Subscription } from 'rxjs'
import { UserService } from '../../../services/UserService'

/**
 * 
 */
@Component({
	selector: 'app-user-list',
	templateUrl: 'user-list.component.html',
	styleUrl: 'user-list.component.scss',
})
export class UserListComponent implements OnInit, OnDestroy {
	/**
	 * 
	 */
	@Output() selectedUser = new EventEmitter<UserModel>()

	/**
	 * 
	 */
	public users: UserModel[] = []

	/**
	 * 
	 */
	public status: ApiStatus = 'idle'

	/**
	 * 
	 */
	private subscription!: Subscription

	/**
	 * 
	 * @param service 
	 */
	constructor(private service: UserService) { }
	
	/**
	 * 
	 */
	ngOnInit(): void {
		this.subscription = this.service.store.collection$.subscribe((state: ICommonState<UserModel[]>) => {
			this.users = [...(state.data || [])]
			this.status = state.status
		})
		this.service.getUsersList()
	}

	/**
	 * 
	 */
	ngOnDestroy(): void {
		this.service.store.unsubscribeAll()
		if (this.subscription) this.subscription.unsubscribe()
	}

	/**
	 * 
	 * @param userId 
	 */
	public onSelectUser(user: UserModel): void {
		this.selectedUser.emit(user)
	}
}
