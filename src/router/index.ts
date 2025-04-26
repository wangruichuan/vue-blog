import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue'),
      meta: {
        title: '关于我',
      },
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/Blog/index.vue'),
      meta: {
        title: '博客',
      },
    },
    {
      path: '/blog/cate/:id',
      name: 'BlogCate',
      component: () => import('@/views/Blog/index.vue'),
      meta: {
        title: '文章',
      },
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: () => import('@/views/Blog/Detail.vue'),
      meta: {
        title: '文章详情',
        hidden: 'true',
      },
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('@/views/Project/index.vue'),
      meta: {
        title: '项目&效果',
      },
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/Message/index.vue'),
      meta: {
        title: '留言板',
      },
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound/index.vue'),
      meta: {
        title: '404',
      },
    },
  ],
})
router.afterEach((to) => {
  document.title = to.meta.title as string
})

export default router
