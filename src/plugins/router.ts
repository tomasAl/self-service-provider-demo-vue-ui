import { createRouter, createWebHistory } from 'vue-router'
import SingleStepForm from '@/pages/SingleStepForm/SingleStepForm.vue'
import MultiStepForm from '@/pages/MultiStepForm/MultiStepForm.vue'
import { getServiceFormBaseUrl } from '@rc-ses/mfe-host'

const router = createRouter({
  history: createWebHistory(getServiceFormBaseUrl()),
  routes: [
    {
      path: '/00000000-0000-0000-0001-000000000000',
      name: 'singleStepFormService',
      component: SingleStepForm
    },
    {
      path: '/00000000-0000-0000-0001-000000000001',
      name: 'multiStepFormService',
      component: MultiStepForm
    }
  ]
})

export default router
