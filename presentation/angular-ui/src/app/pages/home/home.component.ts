import { Component } from '@angular/core';
import { UserModel } from '@tech-talk/core';

/**
 * 
 */
@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrl: 'home.component.scss'
})
export class HomeComponent { 
	/**
	 * 
	 */
	public selectedUser: UserModel | null = null

	/**
	 * 
	 */
	public isPostListVisible: boolean = false

	/**
	 * 
	 * @param user 
	 */
	public onUserSelected(user: UserModel): void {
		this.selectedUser = user
		this.isPostListVisible = true
	}

	/**
	 * 
	 */
	public onBack(): void {
		this.isPostListVisible = false
	}
}