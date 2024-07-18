/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import { createVuetify } from 'vuetify'
import { en, lt } from 'vuetify/locale'
import 'vuetify/styles'

import { aliases, rcIcons } from '@/assets/icons/iconSet'
import { darkTheme, lightTheme } from '@/theme/themes'

import defaults from '../theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const rcCreateVuetify = () =>
  createVuetify({
    defaults,
    locale: {
      locale: 'lt',
      fallback: 'en',
      messages: { lt, en },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    icons: {
      defaultSet: 'rc',
      aliases,
      sets: {
        rc: rcIcons,
      },
    },
  })

export { rcCreateVuetify }

export default createVuetify({
  defaults,
  locale: {
    locale: 'lt',
    fallback: 'en',
    messages: { lt, en },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  icons: {
    defaultSet: 'rc',
    aliases,
    sets: {
      rc: rcIcons,
    },
  },
})
