<template>
  <div class="rc-vertical-stepper-wrapper">
    <div class="rc-vertical-stepper">
      <div class="line" />
      <div
        v-for="(step, index) in items"
        :key="index"
        class="step"
        :class="{ active: step.active }"
      >
        <div class="step-icon">
          <v-icon v-if="step.completed" icon="rc-success" color="success-500" />
          <DotActive v-else-if="step.active" color="primary" />
          <DotInactive v-else />
        </div>
        <div
          class="step-title"
          :class="{ 'text-h6': step.active, 'text-subtitle-1': !step.active }"
        >
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DotActive from '@/assets/icons/filled/DotActive.vue'
import DotInactive from '@/assets/icons/filled/DotInactive.vue'
import { VerticalStepperProps } from '@/types/steppers/VerticalStepperProps'

import './VerticalStepperStyle.scss'

defineProps<VerticalStepperProps>()
</script>
