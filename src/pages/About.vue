<template>
	<q-page class="column items-center q-pa-lg">
		<p>
			This small project was created to test the quasar library based on a
			tutorial by Make Apps with Danny on the subject, but I made some small
			tweaks on it.
		</p>

		<p>Where you can find me:</p>
		<GithubButton />
	</q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GithubButton from '../components/GithubButton.vue';

export default defineComponent({
	name: 'PageIndex',
	components: { GithubButton },
	setup() {
		return {};
	},
});
</script>
