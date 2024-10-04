<template>
	<v-list lines="two" v-if="status === 'succeeded'">
		<UserListItem 
			v-for="user in users"
			:key="user.Id"
			:user="user"
			@user-clicked="onSelectUser"
		/>
	</v-list>
	<UsersListSkeleton v-if="status === 'pending'" />
    <p v-if="status === 'rejected'">Error loading users.</p>
</template>

<script lang="ts">
import { type ApiStatus, type ICommonState, type UserModel } from '@tech-talk/core';
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { useUserQueries } from '../../services/useUserQueries';
import UserListItem from '../molecules/UserListItem.vue';
import UsersListSkeleton from '../molecules/UsersListSkeleton.vue';

export default defineComponent({
	name: 'UsersList',
	emits: ['user-selected'],
	components: { UserListItem,  UsersListSkeleton },
	setup(_, { emit }) {
		const { store, getUsersList } = useUserQueries()
		const users = ref<UserModel[]>([])
		const status = ref<ApiStatus>('idle')
		let subscription: any

		onMounted(() => {
			subscription = store.collection$.subscribe((state: ICommonState<UserModel[]>) => {
				users.value = state.data || []
				status.value = state.status
			})
			getUsersList()
		})

		onUnmounted(() => {
			store.unsubscribeAll()
			if (subscription) subscription.unsubscribe()
		})

		const onSelectUser = (user: UserModel) => {
			emit('user-selected', user)
		}

		return {
			users,
			status,
			onSelectUser
		}
	}
})
</script>