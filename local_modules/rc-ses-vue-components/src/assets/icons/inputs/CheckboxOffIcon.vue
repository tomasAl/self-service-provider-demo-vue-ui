<template>
  <IconSVG v-bind="$props">
    <rect x="1" y="1" width="22" height="22" rx="3" fill="white" />
    <rect
      class="rc-icon-checkbox-border"
      x="1"
      y="1"
      width="22"
      height="22"
      rx="3"
      stroke="#9DA6B2"
      stroke-width="2"
    />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'CheckboxOffIcon',
  components: { IconSVG },
  props: useIconProps,
})
</script>
