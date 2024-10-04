import { Component, Input } from '@angular/core';

/**
 * 
 */
@Component({
	selector: 'app-user-avatar',
	templateUrl: 'user-avatar.components.html',
	styleUrl: 'user-avatar.components.scss'
})
export class UserAvatarComponent {
	/**
	 * 
	 */
	@Input() name: string = ''

	/**
	 * 
	 */
	constructor() { }

	/**
	 * 
	 */
	get initials(): string {
		return this.name
			.split(' ', 2)
			.map(name => name[0])
			.join('')
			.toUpperCase()
	}
}
