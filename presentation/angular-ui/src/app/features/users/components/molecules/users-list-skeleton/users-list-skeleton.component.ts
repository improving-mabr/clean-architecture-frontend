import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-users-list-skeleton',
	templateUrl: 'users-list-skeleton.component.html',
	styleUrl: 'users-list-skeleton.component.scss',
	changeDetection: ChangeDetectionStrategy.Default
})

export class UsersListSkeletonComponent { 
	public items: number[] = Array.from({ length: 6 }, (_, i) => i)
}