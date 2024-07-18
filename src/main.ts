import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import { rcCreateVuetify } from 'rc-ses-vue-components';

import 'vuetify/styles';

const vuetify = rcCreateVuetify();

import App from './App.vue';
import router from './router';

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
      return h(App, {});
    },
  },
  handleInstance(app) {
    app.use(router);
    app.use(vuetify);
  },
});

/*
 * @MICROFRONTEND
 *
 * single-spa pateikiami lifecycle hook'ai.
 */
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
