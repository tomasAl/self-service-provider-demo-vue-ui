import { createI18n } from 'vue-i18n'

import messages from '@/i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'lt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
