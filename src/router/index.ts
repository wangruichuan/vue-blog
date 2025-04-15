import { createRouter, createWebHashHistory  } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/article',
      name: 'Blog',
      component: () => import('@/views/Blog/index.vue'),
      children:[{
        path: ':id',
        component: () => import('@/views/Blog/index.vue'),
      }]
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
    }
  ],
})

export default router
