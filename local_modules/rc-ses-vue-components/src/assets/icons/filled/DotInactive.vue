<template>
  <IconSVG v-bind="$props">
    <circle cx="12" cy="12" r="3" fill="#D0D4D9" />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'DotInactive',
  components: { IconSVG },
  props: useIconProps,
})
</script>
