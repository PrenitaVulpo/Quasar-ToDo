<template>
	<a
		href="https://www.linkedin.com/in/guilherme-damasceno-85480211b/"
		target="_blank"
		rel="noopener noreferrer"
		class="button-main q-py-xs q-px-sm"
	>
		<q-avatar square color="white" class="q-mr-md">
			<img src="../assets/LI-In-Bug.png" alt="Linkedin" />
		</q-avatar>
		<h4 class="no-margin text-weight-medium">/guilherme-damasceno-85480211b</h4>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style lang="sass" scoped>
.button-main
  width: 100%
  display: flex
  align-items: center
  text-decoration: none
  color: #fff
  border-radius: 10px
  background-color: #0177B7
  transition: 0.2s
.button-main:hover
  background-color: #1DA0C9
</style>
