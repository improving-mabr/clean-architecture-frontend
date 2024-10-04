<template>
	<v-list-item-group>
		<v-list-item
			@click="onClickedUser(user)"
			:title="user?.Name"
			:subtitle="user?.Email">
				<template v-slot:prepend>
					<UserAvatar :initials="user?.Initials!" />
				</template>
				<template v-slot:append>
					<v-btn
						color="grey-lighten-1"
						icon="mdi-chevron-right"
						variant="text"></v-btn>
				</template>
		</v-list-item>
		<v-divider inset></v-divider>
	</v-list-item-group>
</template>

<script lang="ts">
import type { UserModel } from '@tech-talk/core';
import { defineComponent, type PropType } from 'vue';
import UserAvatar from '../atoms/UserAvatar.vue';

export default defineComponent({
	name: 'UserListItem',
	components: { UserAvatar },
	props: {
		user: {
			type: Object as PropType<UserModel | null>
		}
	},
	methods: {
		onClickedUser(user: UserModel | null | undefined) {
			if (user)
				this.$emit('user-clicked', user)
		}
	}
})
</script>