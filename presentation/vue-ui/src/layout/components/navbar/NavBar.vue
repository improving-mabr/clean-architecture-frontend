<template>
	<v-toolbar density="compact" color="secondary">
		<v-app-bar-nav-icon></v-app-bar-nav-icon>
		<v-toolbar-title>Vue App</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-toolbar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NabVar'
})
</script>