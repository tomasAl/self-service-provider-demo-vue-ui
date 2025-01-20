import { createRouter, createWebHistory } from 'vue-router'
import SingleStepForm from '@/pages/SingleStepForm/SingleStepForm.vue'
import MultiStepForm from '@/pages/MultiStepForm/MultiStepForm.vue'
import OwnedPropertiesPage from '@/pages/OwnedPropertiesPage/OwnedPropertiesPage.vue'
import {
  getMFEBaseUrl,
  getOwnedPropertiesUrlFragment,
  getServiceFormUrlFragment
} from '@rc-ses/mfe-host'

/*
 * Pavyzdine router'io konfigūracija, jei nėra aktualūs "Mano turtas" micro-frontend'ai.
 * Past.: atkreipti dėmesį į `basename` konfigūraciją.
 */
// const router = createRouter({
//   history: createWebHistory(getServiceFormBaseUrl()),
//   routes: [
//     {
//       path: '/00000000-0000-0000-0001-000000000000',
//       name: 'singleStepFormService',
//       component: SingleStepForm
//     },
//     {
//       path: '/00000000-0000-0000-0001-000000000001',
//       name: 'multiStepFormService',
//       component: MultiStepForm
//     }
//   ]
// })

/*
 * Pavyzdine router'io konfigūracija, teikiant puslapius "Mano turtas" duomenų peržiūrai
 * Past.: atkreipti dėmesį į `basename` ir tėvinių `Route` elementų `path` konfigūraciją.
 */
const router = createRouter({
  history: createWebHistory(getMFEBaseUrl()),
  routes: [
    {
      path: `/${getServiceFormUrlFragment()}`,
      children: [
        {
          path: '00000000-0000-0000-0001-000000000000',
          name: 'singleStepFormService',
          component: SingleStepForm
        },
        {
          path: '00000000-0000-0000-0001-000000000001',
          name: 'multiStepFormService',
          component: MultiStepForm
        }
      ]
    },
    {
      path: `/${getOwnedPropertiesUrlFragment()}`,
      children: [
        {
          path: '00000000-0000-0000-0001-000000000002',
          name: 'ownedProperties',
          component: OwnedPropertiesPage
        }
      ]
    }
  ]
})

export default router
