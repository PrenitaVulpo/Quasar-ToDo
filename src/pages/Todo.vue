<template>
	<q-page class="column bg-grey-3 q-pa-lg justify-between">
		<div class="q-gutter-sm q-pb-sm q-pr-sm bg-grey-1">
			<q-list separator bordered v-if="taskList.length > 0">
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
							color="negative"
							icon="delete"
						/>
					</q-item-section>
				</q-item>
			</q-list>
			<h5 v-else>Você não tem nenhuma tarefa a ser feita!</h5>
		</div>
		<footer class="footer row align-end justify-end">
			<q-btn
				round
				dense
				color="positive"
				icon="add"
				size="1.5rem"
				@click="addTask"
			/>
		</footer>
	</q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Task from '../TS/Interfaces/Task';
import { useQuasar } from 'quasar';
import TaskForm from '../components/TaskForm.vue';
import getTasks from '../composables/getTasks';

export default defineComponent({
	name: 'PageIndex',
	components: {},
	setup() {
		const taskList = ref<Task[]>(getTasks());

		const $q = useQuasar();

		return { taskList, $q };
	},
	methods: {
		removeTask(index: number) {
			this.$q
				.dialog({
					title: 'Confirm',
					message: 'Would you really like to delete this task?',
					cancel: true,
					persistent: true,
				})
				.onOk(() => {
					this.taskList.splice(index, 1);
				});
		},
		addTask() {
			this.$q.dialog({
				component: TaskForm,
			});
		},
	},
});
</script>

<style lang="sass" scoped>
.done
  .q-item__label
    text-decoration: line-through
.footer
  position: sticky
</style>
