import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { ApiStatus, ICommonState, PostModel, UserModel } from '@tech-talk/core';
import { PostService } from '../../../services/PostService';

/**
 * 
 */
@Component({
	selector: 'app-posts-list',
	templateUrl: 'posts-list.component.html',
	styleUrl: 'posts-list.component.scss',
})
export class PostsListComponent implements OnInit, OnChanges, OnDestroy {
	/**
	 * 
	 */
	@Input() user: UserModel | null = null

	/**
	 * 
	 */
	@Output() back = new EventEmitter<void>()

	/**
	 * 
	 */
	public posts: PostModel[] = []

	/**
	 * 
	 */
	public status: ApiStatus = 'idle'

	/**
	 * 
	 * @param service 
	 */
	constructor(private service: PostService) { }
	
	/**
	 * 
	 */
	ngOnInit(): void {
		this.service.store.collection$.subscribe((state: ICommonState<PostModel[]>) => {
			this.posts = [...(state.data || [])]
			this.status = state.status
		})
	}

	/**
	 * 
	 */
	ngOnChanges(): void {
		if (this.user === null) 
			return
		this.service.getPostsByUser(this.user)
	}

	/**
	 * 
	 */
	ngOnDestroy(): void {
		this.service.store.unsubscribeAll()
	}

	/**
	 * 
	 */
	public onBack(): void {
		this.back.emit()
	}
}