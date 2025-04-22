import { createRouter, createWebHistory  } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/Blog/index.vue'),
    },
    {
      path: '/blog/cate/:id',
      name: 'BlogCate',
      component: () => import('@/views/Blog/index.vue'),
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: () => import('@/views/Blog/Detail.vue'),
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('@/views/Project/index.vue'),
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/Message/index.vue'),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/components/MessageArea/index.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound/index.vue')
    }
  ],
})

export default router
