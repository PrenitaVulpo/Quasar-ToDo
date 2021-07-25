<template>
	<q-layout view="lHh Lpr lFf">
		<q-header>
			<q-toolbar>
				<q-btn
					flat
					dense
					round
					icon="menu"
					aria-label="Menu"
					@click="toggleLeftDrawer"
				/>
			</q-toolbar>
			<div class="q-px-lg q-pt-xl q-mb-md">
				<span class="text-h3">ToDo</span>
				<br />
				<span class="text-subtitle1">{{ formatedDate }}</span>
			</div>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			:width="200"
			:breakpoint="600"
		>
			<q-scroll-area
				style="
					height: calc(100% - 192px);
					margin-top: 192px;
					border-right: 1px solid #ddd;
				"
			>
				<q-list padding>
					<q-item clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="inbox" />
						</q-item-section>

						<q-item-section> Inbox </q-item-section>
					</q-item>

					<q-item active clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="star" />
						</q-item-section>

						<q-item-section> Star </q-item-section>
					</q-item>

					<q-item clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="send" />
						</q-item-section>

						<q-item-section> Send </q-item-section>
					</q-item>

					<q-item clickable v-ripple>
						<q-item-section avatar>
							<q-icon name="drafts" />
						</q-item-section>

						<q-item-section> Drafts </q-item-section>
					</q-item>
				</q-list>
			</q-scroll-area>

			<q-img
				class="absolute-top"
				src="https://cdn.quasar.dev/img/material.png"
				style="height: 192px"
			>
				<div class="absolute-bottom bg-transparent">
					<q-avatar size="56px" class="q-mb-sm">
						<img src="../assets/user.png" />
					</q-avatar>
					<div class="text-weight-bold">Usuário anônimo</div>
				</div>
			</q-img>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { date } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'MainLayout',

	components: {},

	setup() {
		const leftDrawerOpen = ref(false);

		return {
			leftDrawerOpen,
			toggleLeftDrawer() {
				leftDrawerOpen.value = !leftDrawerOpen.value;
			},
		};
	},
	computed: {
		formatedDate() {
			let todayDate = new Date();
			return date.formatDate(todayDate, 'dddd, D MMMM YYYY');
		},
	},
});
</script>
