import { h, createApp } from 'vue'
// import 'vuetify/styles'
import singleSpaVue from 'single-spa-vue'
import registerPlugins from '@/plugins'

import App from '@/App.vue'

/*
 * @MICROFRONTEND
 *
 * Aplikacija turi būti sukuriama naudojant `singleSpaVue` metodą.
 *
 * Pagrindinis aplikacijos komponentas pateikiamas kaip pirmas
 * parametras `h` metodui. `use` naudojimo pavyzdžiai pateikiami
 * `handleInstance` callback'e.
 */
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {})
    }
  },
  handleInstance(app) {
    registerPlugins(app)
  }
})

/*
 * @MICROFRONTEND
 *
 * single-spa pateikiami lifecycle hook'ai.
 */
export const { bootstrap } = vueLifecycles
export const { mount } = vueLifecycles
export const { unmount } = vueLifecycles
