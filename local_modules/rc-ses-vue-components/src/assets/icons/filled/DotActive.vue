<template>
  <IconSVG v-bind="$props">
    <circle cx="12" cy="12" r="6" fill="#222D3D" />
  </IconSVG>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconSVG from '../IconSVG.vue'
import useIconProps from '../useIconProps'

export default defineComponent({
  name: 'DotActive',
  components: { IconSVG },
  props: useIconProps,
})
</script>
