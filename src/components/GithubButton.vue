<template>
	<a href="https://github.com/PrenitaVulpo" class="button-main q-py-xs q-px-sm">
		<q-avatar class="q-mr-md">
			<img src="../assets/GitHub-Mark-Light-120px-plus.png" alt="Github" />
		</q-avatar>
		<h3 class="no-margin text-weight-medium">/PrenitaVulpo</h3>
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
  background-color: #0D1117
  transition: 0.2s
.button-main:hover
  background-color: #161B22
</style>
