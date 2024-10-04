<template>
	<v-list lines="two">
		<v-list-item-group v-for="n in 6" :key="n">
			<v-skeleton-loader type="list-item-avatar-two-line" />
			<v-divider inset></v-divider>
		</v-list-item-group>
	</v-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UsersListSkeleton'
})
</script>