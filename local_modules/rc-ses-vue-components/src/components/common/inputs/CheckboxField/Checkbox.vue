<template>
  <v-checkbox
    v-model="model"
    class="rc-checkbox"
    v-bind="props"
    :class="classes"
    :name="name"
    :color="color"
    :disabled="disabled"
    :hide-details="!error"
    :error="!!error"
    :error-messages="error"
    :readonly="readonly"
    :placeholder="placeholder"
    :label="label"
  >
    <template v-if="$slots.label" #label="labelProps">
      <slot name="label" v-bind="labelProps">{{ label }}</slot>
    </template>
  </v-checkbox>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { CheckboxProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  label: undefined,
})

const model = defineModel<boolean>()
const classes = computed(() => {
  return {
    'rc-checkbox--checked': model.value,
  }
})
</script>
