<template>
	<q-page class="column bg-grey-3 q-pa-lg">
		<div class="q-gutter-sm q-pb-sm q-pr-sm bg-grey-1">
			<q-list>
				<!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

				<q-item class="bg-light-green-2" tag="label" v-ripple>
					<q-item-section avatar>
						<q-checkbox val="orange" color="primary" />
					</q-item-section>
					<q-item-section>
						<q-item-label>Orange</q-item-label>
						<q-item-label caption>With description</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
	</q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PageIndex',
	components: {},
	setup() {
		return {};
	},
});
</script>
