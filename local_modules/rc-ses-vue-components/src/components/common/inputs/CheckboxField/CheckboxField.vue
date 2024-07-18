<template>
  <FieldWrapper :label="fieldLabel" :description="fieldDescription" :for="name">
    <v-card class="rc-checkbox-field bg-grey-50" color="grey" variant="outlined">
      <Checkbox v-model="model" v-bind="props"> </Checkbox>
    </v-card>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import Checkbox from '@/components/common/inputs/CheckboxField/Checkbox.vue'
import { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'

import './CheckboxFieldStyle.scss'

const props = withDefaults(defineProps<CheckboxFieldProps>(), {
  color: 'primary',
})

const model = defineModel<boolean>()
</script>
