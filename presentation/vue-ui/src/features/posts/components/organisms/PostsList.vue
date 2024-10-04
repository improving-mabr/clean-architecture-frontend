<template>	
	<div class="posts-list">
		<v-btn icon="mdi-arrow-left" @click="onBack"></v-btn>
		<div class="posts-list__container">
			<PostListItem v-for="post in posts" 
				:key="post.Id"
				:post="post"
				:initials="user?.Initials" />
			<PostsListSkeleton v-if="status === 'pending'" />
		</div>
	</div>
</template>

<script lang="ts">
import type {
	ApiStatus,
	ICommonState,
	PostModel,
	UserModel
} from '@tech-talk/core';
import {
	defineComponent,
	onBeforeUnmount,
	onMounted,
	type PropType,
	ref,
	watch
} from 'vue';
import { usePostQueries } from '../../services/usePostQueries';
import PostListItem from '../molecules/PostListItem.vue';
import PostsListSkeleton from '../molecules/PostsListSkeleton.vue';

export default defineComponent({
	name: 'PostsList',
	emits: [ 'navigation-back' ],
	components: { PostListItem, PostsListSkeleton },
	props: {
		user: {
			type: Object as PropType<UserModel | null>,
			default: null
		},
		
	},
	setup(props, { emit }) {
		const posts = ref<PostModel[]>([])
		const status = ref<ApiStatus>('idle')
		const { store, getPostsByUser } = usePostQueries()

		const fetchPosts = () => {
			if (props.user) {
				getPostsByUser(props.user);
			}
		}

		onMounted(() => {
			store.collection$.subscribe((state: ICommonState<PostModel[]>) => {
				posts.value = state.data || [];
				status.value = state.status;
			})
			fetchPosts()
		})

		watch(() => props.user, fetchPosts)

		onBeforeUnmount(() => {
			store.unsubscribeAll()
		})

		const onBack = () => {
			emit('navigation-back')
		}

		return {
			posts,
			status,
			onBack,
		}
	}
})
</script>

<style scoped>

.posts-list__container {
	padding: 8px;
}

.post-list__item {
	margin-bottom: 13px;
}

.v-card-title {
	text-transform: capitalize !important;
}
</style>