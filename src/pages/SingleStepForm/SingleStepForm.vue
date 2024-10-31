<script setup lang="ts">
import UzsakymasForm from './UzsakymasForm.vue'
import { RcSesFormContainer, useAccordionController } from '@registrucentras/rc-ses-vue-components'

const accordionController = useAccordionController({
  singleForm: {
    expanded: true,
    state: 'completed',
    title: 'Bazinė informacija',
  },
})
</script>

<template>
  <RcSesFormContainer :accordion-controller="accordionController" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsAfter />
    </template>

    <template #default>
      <RcSesAccordion id="singleForm">
        <UzsakymasForm />
      </RcSesAccordion>
    </template>
  </RcSesFormContainer>
</template>
