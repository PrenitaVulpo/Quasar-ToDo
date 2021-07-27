<template>
	<q-page class="column bg-grey-3 q-pa-lg">
		<div class="q-gutter-sm q-pb-sm q-pr-sm bg-grey-1">
			<q-list separator bordered>
				<!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

				<q-item
					tag="label"
					v-ripple
					v-for="(task, index) in taskList"
					:key="task.id"
					:class="{ 'done bg-light-green-2': task.done }"
				>
					<q-item-section avatar>
						<q-checkbox v-model="task.done" :val="!task.done" color="primary" />
					</q-item-section>
					<q-item-section>
						<q-item-label class="text-weight-medium">{{
							task.title
						}}</q-item-label>
						<q-item-label caption>{{ task.description }}</q-item-label>
					</q-item-section>
					<q-item-section v-if="task.done" side>
						<q-btn
							@click.stop="removeTask(index)"
							flat
							round
							dense
							color="primary"
							icon="dense"
						/>
					</q-item-section>
				</q-item>
			</q-list>
		</div>
	</q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Task from '../TS/Interfaces/Task';

export default defineComponent({
	name: 'PageIndex',
	components: {},
	setup() {
		const taskList = ref<Task[]>([
			{
				id: '8f0a5257-28bc-4b65-9c50-491f071d0665',
				title: 'task1',
				description: 'task1 description',
				done: false,
			},
			{
				id: '0fc2fad7-d425-4c63-9c40-e590147b16d6',
				title: 'task2',
				description: 'task2 description',
				done: false,
			},
			{
				id: '69615862-fbf4-4538-a137-30780c9dd094',
				title: 'task3',
				description: 'task3 description',
				done: false,
			},
		]);

		return { taskList };
	},
	methods: {
		removeTask(index: number) {
			this.taskList.splice(index, 1);
		},
	},
});
</script>

<style lang="sass" scoped>
.done
  .q-item__label
    text-decoration: line-through
  .q-item__label
    text-decoration: line-through
</style>
