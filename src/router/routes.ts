import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: 'home', component: () => import('pages/Todo.vue'), name: 'Home' },
			{
				path: 'about',
				component: () => import('pages/About.vue'),
				name: 'About',
			},
			{
				path: 'settings',
				component: () => import('pages/Settings.vue'),
				name: 'Settings',
			},
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/Error404.vue'),
	},
];

export default routes;
