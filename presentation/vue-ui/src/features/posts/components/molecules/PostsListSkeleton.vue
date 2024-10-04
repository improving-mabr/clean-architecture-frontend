<template>
	<div class="posts-list-skeleton" v-for="n in 6" :key="n">
		<v-skeleton-loader type="list-item-avatar" />
		<v-skeleton-loader type="paragraph" />
		<v-skeleton-loader type="actions" />
		<p>&nbsp;</p>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PostsListSkeleton'
})
</script>