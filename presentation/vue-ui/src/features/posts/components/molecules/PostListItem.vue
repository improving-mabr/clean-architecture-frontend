<template>
	<v-card
		class="post-list__item"
		elevation="13"
		:title="post.Title">
		<template v-slot:prepend>
			<UserAvatar :initials="initials" />
		</template>
		<v-card-text>
			{{ post.Body }}
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				color="medium-emphasis"
				icon="mdi-bookmark"
				size="small"></v-btn>
			<v-btn
				color="medium-emphasis"
				icon="mdi-share-variant"
				size="small"></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { UserAvatar } from '@/features/users';
import type { PostModel } from '@tech-talk/core';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
	name: 'PostListItem',
	components: { UserAvatar },
	props: {
		post: {
			type: Object as PropType<PostModel>,
			required: true
		},
		initials: {
			type: String,
			default: null
		}
	}
})
</script>
