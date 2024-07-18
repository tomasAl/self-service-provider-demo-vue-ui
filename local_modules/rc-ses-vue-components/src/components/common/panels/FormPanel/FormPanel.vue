<template>
  <v-expansion-panels v-model="panelModel" flat>
    <v-expansion-panel :disabled="disabled" :value="id">
      <v-expansion-panel-title static :collapse-icon="null" :expand-icon="null">
        <span class="text-h5">{{ title }}</span>
        <span class="flex-grow-1" />
        <v-btn
          class="panel-icon"
          :icon="isExpanded ? '$collapse' : '$expand'"
          size="2.5rem"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

import { FormPanelProps } from '@/types/forms/FormPanelProps'

import './FormPanelStyle.scss'

const props = withDefaults(defineProps<FormPanelProps>(), {
  disabled: false,
  completed: false,
})

const model = defineModel<Array<string>>()

const panelModel = computed<Array<string>>({
  get: () => (model.value ? model.value : []),
  set: (value?: Array<string>) => {
    if (!model.value) {
      return
    }

    const includes = model.value.includes(props.id)

    if (!value && includes) {
      model.value = model.value.filter((ep) => ep !== props.id)
    }

    if (value && !includes) {
      model.value.push(props.id)
    }
  },
})

const isExpanded = computed(() => panelModel.value.includes(props.id))
</script>
