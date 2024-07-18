<template>
  <IconSVG class="rc-icon-radio-on" v-bind="$props">
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="currentColor" />
    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="currentColor" />
    <circle cx="12" cy="12" r="5" fill="white" />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'RadioOnIcon',
  components: { IconSVG },
  props: useIconProps,
})
</script>
