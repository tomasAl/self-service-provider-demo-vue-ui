<template>
  <v-tooltip class="rc-tooltip p0" v-bind="props">
    <template v-if="$slots.activator" #activator="activator">
      <slot name="activator" v-bind="activator" />
    </template>

    <template #default>
      <slot name="default">
        <v-card>
          <slot name="title">
            <v-card-title v-if="title" class="text-body-2">{{ title }}</v-card-title>
          </slot>
          <slot name="description">
            <v-card-text v-if="description" class="text-body-2">{{
              description
            }}</v-card-text>
          </slot>
        </v-card>
      </slot>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import './TooltipStyle.scss'

interface TooltipProps {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
  title: undefined,
  description: undefined,
})
</script>
