import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '番茄鍾'
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        title: '番茄鍾 | 設定'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView.vue'),
      meta: {
        title: '番茄鍾 | 待辦事項'
      }
    }
  ]
})

export default router
