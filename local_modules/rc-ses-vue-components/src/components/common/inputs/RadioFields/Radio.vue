<template>
  <v-radio class="rc-radio" v-bind="props" :class="classes" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { RadioProps } from '@/types/inputs/RadioProps'

import './RadioStyle.scss'

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
})

const model = defineModel<boolean>()
const classes = computed(() => {
  return {
    'rc-radio--checked': model.value,
    'rc-radio--readonly': props.readonly,
  }
})
</script>
