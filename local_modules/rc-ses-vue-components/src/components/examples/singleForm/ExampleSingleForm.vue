<template>
  <StepFormLayout :items="steps" single-form>
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <OrderFormActions />
    </template>
  </StepFormLayout>
</template>
<script setup lang="ts">
import OrderFormActions from '@/components/examples/shared/OrderFormActions.vue'

import ServiceForm from './ServiceForm.vue'

const steps = [
  {
    id: 'step2',
    title: 'Paslaugos užsakymo forma',
    active: true,
    expanded: true,
    component: ServiceForm,
  },
]
</script>
