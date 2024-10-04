
<template>
	<div>
		<UsersList v-if="!selectedUser" @user-selected="handleSelectedUser" />
		<PostsList v-else :user="selectedUser" @navigation-back="handleBack" />
	</div>
</template>

<script lang="ts">
import { PostsList } from '@/features/posts';
import { UsersList } from '@/features/users';
import type { UserModel } from '@tech-talk/core';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'UsersView',
	components: { UsersList, PostsList },

	setup() {
		const selectedUser = ref<UserModel | null>(null)
		
		const handleBack = () => {
			selectedUser.value = null
		}

		const handleSelectedUser = (user: UserModel) => {
			selectedUser.value = user
		}

		return {
			selectedUser,
			handleBack,
			handleSelectedUser
		}
	}
})
</script>
