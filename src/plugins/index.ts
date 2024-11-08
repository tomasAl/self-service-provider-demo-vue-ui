import type { App } from 'vue'
import vuetify from './vuetify'
import router from './router'
import rcSesVueComponents from './rc-ses-vue-components'

function registerPlugins(app: App) {
  app.use(vuetify).use(rcSesVueComponents).use(router)
}

export default registerPlugins
