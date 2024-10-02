import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import ContractPage from '../components/pages/ContractPage.vue'
import ContractorPage from '../components/pages/ContractorPage.vue'
import ReportPage from '../components/pages/ReportPage.vue'
import AdminPage from '../components/pages/AdminPage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/contracts',
			name: 'contracts',
			component: ContractPage,
		},
		{
			path: '/contractors',
			name: 'contractors',
			component: ContractorPage,
		},
		{
			path: '/reports',
			name: 'reports',
			component: ReportPage,
		},
		{
			path: '/admin',
			name: 'admin',
			component: AdminPage,
		},
	],
})

export default router
