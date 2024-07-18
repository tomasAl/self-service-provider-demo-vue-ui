<template>
  <FieldWrapper
    class="rc-radio-buttons-field"
    :label="fieldLabel"
    :description="fieldDescription"
    :for="name"
  >
    <div class="rc-radios">
      <v-btn
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'v-btn--active': selectedOption === option.value }"
        :value="option.value"
        variant="outlined"
        :disabled="disabled"
        :readonly="readonly"
        @click="model = option.value"
      >
        {{ option.label }}
      </v-btn>
    </div>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { RadioButtonsFieldProps } from '@/types/inputs/RadioFieldProps'

import './RadioButtonsFieldStyle.scss'

withDefaults(defineProps<RadioButtonsFieldProps>(), {
  label: undefined,
  options: () => [],
})

const model = defineModel<string>()

const selectedOption = computed(() => {
  return model.value ? model.value : null
})
</script>
