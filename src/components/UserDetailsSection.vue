<script setup lang="ts">
/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo interfeisų import'ai
 * apibrėžti src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import type { User } from '@rc-ses/self-service-portal-ui'
import { getUser } from '@rc-ses/self-service-portal-ui'

/*
 * @MICROFRONTEND
 *
 * `getUser` metodo kvietimas, bei User tipas, kuriuos eksportuoja
 * single-spa modulis @rc-ses/self-service-portal-ui
 */
const user: User | undefined = getUser()
</script>

<template>
  <v-container>
    <v-row v-for="(value, key) in user" :key="key" justify="space-around">
      <v-col :style="{ padding: '.25rem .5rem', textAlign: 'end' }">{{ key }}:</v-col>
      <v-col :style="{ padding: '.25rem .5rem', textAlign: 'start' }">{{ value }}</v-col>
    </v-row>
  </v-container>
</template>
