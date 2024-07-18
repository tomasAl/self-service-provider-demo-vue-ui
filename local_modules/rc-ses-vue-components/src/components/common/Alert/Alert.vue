<template>
  <v-alert
    :id="id"
    class="rc-alert"
    :title="title"
    :type="type"
    variant="flat"
    :class="classes"
    :closable="closeable"
  >
    <template #text>
      <slot>{{ text }}</slot>
    </template>
  </v-alert>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

import { AlertProps } from '@/types/common/AlertProps'

import './AlertStyle.scss'

const props = withDefaults(defineProps<AlertProps>(), {
  id: undefined,
  text: undefined,
  title: undefined,
  type: 'info',
  variant: 'light',
  closable: false,
})

const classes = computed(() => {
  return {
    'rc-alert-light': props.variant === 'light',
    'rc-alert-dark': props.variant === 'dark',
  }
})
</script>
