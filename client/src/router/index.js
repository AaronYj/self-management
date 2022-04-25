import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/views/login.vue')
	},
	{
		path: '/layout',
		component: () => import('@/views/layout.vue'),
		children: [
			{
				path: '',
				component: () => import('@/views/home.vue'),
				meta: [],
			}, {
				path: '/articeAdmin',
				component: () => import('@/views/artice/artice-admin.vue'),
				meta: ['文章管理', '文章目录'],
			}, {
				path: '/addArtice',
				name: 'addArtice',
				component: () => import('@/views/artice/add-artice.vue'),
				meta: ['文章管理', '写文章'],
			}, {
				path: '/articeDetail',
				name: 'detail',
				component: () => import('@/views/artice/artice-detail.vue'),
				meta: ['文章管理', '文章目录', '文章详情'],
			},
			{
				path: '/schedule',
				component: () => import('@/views/schedule.vue'),
				meta: ['日程管理', '日程表'],
			},
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
