<template>
  <IconSVG class="rc-icon-radio-off" v-bind="$props">
    <rect x="1" y="1" width="22" height="22" rx="11" fill="currentColor" />
    <rect
      class="rc-icon-stroke"
      x="1"
      y="1"
      width="22"
      height="22"
      rx="11"
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
  name: 'RadioOffIcon',
  components: { IconSVG },
  props: useIconProps,
})
</script>
