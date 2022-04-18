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
		},{
			path: '/articeAdmin',
			component: () => import('@/views/artice/artice-admin.vue'),
			meta: ['博客日记管理', '目录'],
		},{
			path: '/addArtice',
			component: () => import('@/views/artice/add-artice.vue'),
			meta: ['博客日记管理', '写博客'],
		},{
      path: '/articeDrafts',
      component: () => import('@/views/artice/artice-drafts'),
      meta: ['博客日记管理', '草稿箱'],
    },{
			path: '/articeDetail',
			component: () => import('@/views/artice/artice-detail.vue'),
			meta: ['博客日记管理', '文章详情'],
		}
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
