<template>
  <v-file-input
    v-model="model"
    class="rc-file-input"
    :class="classes"
    :clearable="!readonly"
    :prepend-icon="null"
    :disabled="disabled"
    :placeholder="placeholder"
    :error="!!error"
    :hide-details="!error"
    :error-messages="error"
    :readonly="readonly"
    type="file"
    :name="name"
  >
    <template v-if="model" #prepend-inner>
      <v-icon icon="$file" color="primary"></v-icon>
    </template>

    <template #append-inner>
      <v-btn v-if="!model" class="rc-btn-upload" prepend-icon="$upload" color="grey-100"
        >Įkelti failą
      </v-btn>
    </template>
  </v-file-input>
</template>

<script setup lang="ts">
import { FileInputProps } from '@/types/inputs/FileInputProps'

import './FileInputStyle.scss'

const model = defineModel<File | File[] | null | undefined>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
defineProps<FileInputProps>()

const classes = computed(() => {
  return {
    'rc-file-empty': !model.value,
  }
})
</script>
