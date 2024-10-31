<template>
  <v-dialog v-model="isOpen" max-width="400px">
    <v-card>
      <v-card-text class="text-center pa-6">
        <div
          class="rounded-circle my-5 pa-2 bg-error-50 w-25 h-25 d-inline-flex justify-center"
        >
          icon
        </div>
        <h2 class="text-h4 font-weight-bold mb-2">Ar tikrai norite baigti darbą?</h2>
        <p class="text-body">
          Vidutinės rinkos vertės nekilnojamojo turto mokesčiams ir kitoms reikmėms
          nustatymas, perskaičiavimas (masinio vertinimo būdu), įrašymas ar pateikimas
        </p>
      </v-card-text>
      <v-card-actions class="justify-center pa-4 mb-4">
        <RcSesButton color="grey" variant="tonal" class="mr-2 w-25" @click="confirm">
          Taip
        </RcSesButton>
        <RcSesButton color="primary" variant="tonal" class="w-33" @click="cancel">
          Ne, tęsti
        </RcSesButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { RcSesButton } from '@registrucentras/rc-ses-vue-components'

const isOpen = defineModel<boolean>()

const open = () => {
  isOpen.value = true
}

const confirm = () => {
  // Handle confirmation logic here
  isOpen.value = false
}

const cancel = () => {
  isOpen.value = false
}

defineExpose({ open })
</script>
