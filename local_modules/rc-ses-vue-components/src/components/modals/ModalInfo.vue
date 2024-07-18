<template>
  <v-dialog v-model="dialog" class="rc-modal" :persistent="!closable" max-width="470">
    <template #activator="activator">
      <slot name="activator" v-bind="activator"></slot>
    </template>

    <v-card>
      <v-btn
        v-if="closable"
        icon="$close"
        class="rc-modal-close"
        size="small"
        @click="dialog = false"
      />

      <v-card-title class="d-flex flex-column align-center">
        <div class="rc-icon-glow mb-5" :class="`text-${iconColor}`">
          <v-icon v-if="icon" :icon="icon" size="30" :color="iconColor" />
        </div>
        {{ title }}
      </v-card-title>

      <v-card-text class="text-body-2 text-center pt-0">
        <slot name="description">
          {{ description }}
        </slot>
      </v-card-text>

      <v-card-actions class="justify-center">
        <slot name="actions">
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ColorType } from '@/types/common/ColorType'

interface ModalInfoProps {
  icon?: string
  iconColor?: ColorType
  title: string
  description: string
  closable?: boolean
}

withDefaults(defineProps<ModalInfoProps>(), {
  icon: undefined,
  closable: true,
  iconColor: undefined,
})

const dialog = defineModel<boolean>()
</script>

<script lang="ts">
export default {
  name: 'ModalInfo',
}
</script>
