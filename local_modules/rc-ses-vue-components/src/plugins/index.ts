/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
// Plugins
// Types
import type { App } from 'vue'

import router from '../router'
import i18n from './i18n'
import vuetify from './vuetify'

export default function registerPlugins(app: App) {
  app.use(i18n).use(vuetify).use(router)
}
