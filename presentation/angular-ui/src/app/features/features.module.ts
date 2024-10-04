import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { EmptyStateComponent } from "../shared/components/molecules/empty-state/empty-state.component"
import { ErrorStateComponent } from "../shared/components/molecules/error-state/error-state.component"
import { PostsListSkeletonComponent } from './posts/components/molecules/posts-list-skeleton/posts-list-skeleton.component'
import { PostsListComponent } from './posts/components/organisms/posts-list/posts-list.component'
import { UserAvatarComponent } from './users/components/atoms/user-avatar/user-avatar.components'
import { UsersListSkeletonComponent } from './users/components/molecules/users-list-skeleton/users-list-skeleton.component'
import { UserListComponent } from './users/components/organisms/user-list/user-list.component'

@NgModule({
	imports: [
		CommonModule,
		EmptyStateComponent,
		ErrorStateComponent,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatIconModule,
		MatListModule,
		NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' }),
	],
	exports: [
		UserListComponent,
		PostsListComponent
	],
	declarations: [
		PostsListComponent,
		PostsListSkeletonComponent,
		UserAvatarComponent,
		UserListComponent,
		UsersListSkeletonComponent,
	],
	providers: [],
})
export class FeaturesModule { }
