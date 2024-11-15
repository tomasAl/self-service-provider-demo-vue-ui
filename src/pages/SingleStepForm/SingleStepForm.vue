<script setup lang="ts">
import { RcSesFormContainer, useAccordionController } from '@registrucentras/rc-ses-vue-components'
import FormActionsAfter from '@/pages/shared/FormActionsAfter.vue'
import FormActions from '@/pages/shared/FormActions.vue'
import UzsakymasForm from './UzsakymasForm.vue'

const accordionController = useAccordionController({
  singleForm: {
    expanded: true,
    state: 'completed',
    title: 'Bazinė informacija'
  }
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
