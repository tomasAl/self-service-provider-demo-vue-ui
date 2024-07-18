<template>
  <v-btn class="rc-btn" v-bind="props">
    <slot />

    <template v-if="$slots.append" #append>
      <slot name="append"></slot>
    </template>

    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>

    <template v-if="$slots.loader" #loader>
      <slot name="loader"></slot>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import type { ButtonProps } from '@/types/common/ButtonProps'

import './ButtonStyle.scss'

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'tonal',
})
</script>
