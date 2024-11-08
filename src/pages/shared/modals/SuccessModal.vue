<template>
  <v-dialog v-model="isOpen" max-width="400px">
    <v-card>
      <v-card-text class="text-center pa-6">
        <div class="rounded-circle my-5 pa-2 bg-success-50 w-25 h-25 d-inline-flex justify-center">
          icon
        </div>
        <h2 class="text-h4 font-weight-bold mb-2">Veiksmas sėkmingai atliktas</h2>
        <p class="text-body">
          Jūsų veiksmas buvo sėkmingai atliktas. Dėkojame už jūsų laiką ir pastangas. Jei turite
          kokių nors klausimų ar papildomų poreikių, nedvejodami kreipkitės į mūsų klientų
          aptarnavimo komandą.
        </p>
      </v-card-text>
      <v-card-actions class="justify-center pa-4 mb-4">
        <RcSesButton color="primary" variant="tonal" class="w-33" @click="confirm">
          Uždaryti
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

defineExpose({ open })
</script>
