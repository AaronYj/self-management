import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home.vue'),
    children: [
      {
			path: '',
			component: () => import('@/pages/home.vue'),
			meta: [],
		},{
			path: '/articeAdmin',
			component: () => import('@/pages/artice/artice-admin.vue'),
			meta: ['文章管理', '文章目录'],
		},{
			path: '/addArticle',
			component: () => import('@/pages/artice/add-article.vue'),
			meta: ['文章管理', '写文章'],
		},{
      path: '/drafts',
      component: () => import('@/pages/artice/drafts'),
      meta: ['文章管理', '草稿箱'],
    },{
			path: '/articeDetail',
			component: () => import('@/pages/artice/artice-detail.vue'),
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
