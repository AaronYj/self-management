import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
			path: '',
			component: () => import('@/views/home.vue'),
			meta: [],
		},{
			path: '/articeAdmin',
			component: () => import('@/views/artice/artice-admin.vue'),
			meta: ['文章管理', '文章目录'],
		},{
			path: '/addArtice',
			component: () => import('@/views/artice/add-artice.vue'),
			meta: ['文章管理', '写文章'],
		},{
      path: '/articeDrafts',
      component: () => import('@/views/artice/artice-drafts'),
      meta: ['文章管理', '草稿箱'],
    },{
			path: '/articeDetail',
			component: () => import('@/views/artice/artice-detail.vue'),
			meta: ['文章管理', '文章详情'],
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
