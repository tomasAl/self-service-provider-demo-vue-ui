<template>
  <TextField v-model="model" v-bind="props">
    <template #clear>
      <slot name="clear">
        <XCircleFilledIcon
          v-if="!props.readonly"
          :color="error ? 'error-600' : 'primary'"
          @click="model = ''"
        />
      </slot>
    </template>

    <template v-if="$slots['append']" #append="binds">
      <slot name="append" v-bind="binds" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner="binds">
      <slot name="append-inner" v-bind="binds" />
    </template>
    <template v-if="$slots['counter']" #counter="binds">
      <slot name="counter" v-bind="binds" />
    </template>
    <template v-if="$slots['loader']" #loader="binds">
      <slot name="loader" v-bind="binds" />
    </template>
    <template v-if="$slots['prepend']" #prepend="binds">
      <slot name="prepend" v-bind="binds" />
    </template>
    <template #prepend-inner>
      <v-icon icon="$search" />
    </template>
  </TextField>
</template>

<script setup lang="ts">
import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'
import type { SearchFieldProps } from '@/types/inputs/SearchFieldProps'

const props = defineProps<SearchFieldProps>()
const model = defineModel<string | number>()
</script>
