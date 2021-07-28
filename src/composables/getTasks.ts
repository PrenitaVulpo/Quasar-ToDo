import Task from 'src/TS/Interfaces/Task';

interface TaskList {
	tasks: Task[];
}

const getTasks = () => {
	const tasks = localStorage.getItem("@PrenitaVulpo'sQuasarTodo:Tasks");
	if (tasks) {
		const resolvedTasks = JSON.parse(tasks) as TaskList;

		return resolvedTasks.tasks;
	}

	return [] as Task[];
};

export default getTasks;
