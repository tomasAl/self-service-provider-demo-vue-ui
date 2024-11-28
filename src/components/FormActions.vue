<script setup lang="ts">
import { inject } from 'vue'
/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
 * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { redirectToSelfServiceDashboard } from '@rc-ses/mfe-host'
import { ArrowRightIcon, RcSesButton, UseFormType } from '@registrucentras/rc-ses-vue-components'

const formController = inject<UseFormType>('formController')

const submit = () => {
  if (formController) {
    formController.submitForm()

    if (formController.meta.value.valid) {
      // eslint-disable-next-line no-console
      console.debug('Form is valid', formController.values)
    }
  }
}
</script>

<template>
  <RcSesButton
    variant="text"
    color="primary-700"
    prepend-icon="$prev"
    class="font-weight-regular"
    @click="() => redirectToSelfServiceDashboard()"
    >Baigti pildyti vėliau</RcSesButton
  >
  <div class="flex-grow-1" />
  <RcSesButton size="large" class="text-body-2 font-weight-strong" @click="submit">
    Pridėti į krepšelį
    <template #append>
      <ArrowRightIcon color="grey-900" />
    </template>
  </RcSesButton>
</template>
