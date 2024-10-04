<template>
	<v-avatar color="#41B883">
		{{ initials }}
	</v-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UserAvatar',
	props: {
		initials: {
			type: String,
			required: true
		}
	}
})
</script>
