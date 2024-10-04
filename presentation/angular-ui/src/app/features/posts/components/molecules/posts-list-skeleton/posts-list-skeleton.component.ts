import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-posts-list-skeleton',
	templateUrl: 'posts-list-skeleton.component.html',
	styleUrl: 'posts-list-skeleton.component.scss',
	changeDetection: ChangeDetectionStrategy.Default
})

export class PostsListSkeletonComponent {
	public items: number[] = Array.from({ length: 13 }, (_, i) => i)	
}