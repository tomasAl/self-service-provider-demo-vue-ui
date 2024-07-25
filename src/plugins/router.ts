import { createRouter, createWebHistory } from 'vue-router'
import ServicePage from '../pages/ServicePage.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/demo-paslaugos/vue',
      name: 'service',
      component: ServicePage
    }
  ]
})

export default router
