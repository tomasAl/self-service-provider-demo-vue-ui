import vuetify from './vuetify'
import router from './router'
import rcSesVueComponents from './rc-ses-vue-components'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(rcSesVueComponents)
    .use(router)
}
