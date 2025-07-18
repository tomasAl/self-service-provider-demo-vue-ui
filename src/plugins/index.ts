import type { App } from 'vue'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import vuetify from './vuetify'
import router from './router'
import rcSesVueComponents from './rc-ses-vue-components'

function registerPlugins(app: App) {
  app.use(I18NextVue, { i18next }).use(vuetify).use(rcSesVueComponents).use(router)
}

export default registerPlugins
