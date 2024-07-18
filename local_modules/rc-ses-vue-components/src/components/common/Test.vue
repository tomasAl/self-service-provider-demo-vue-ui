<template>
  <div class="flex">
    <span
      v-if="isButtonHover"
      class="text-subtitle-1 mr-3 text-grey-600 text-decoration-underline"
      >Suskleisti</span
    >
    <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
    <v-btn :icon="'$expand'" @mouseover="onMouseOver" @mouseout="onMouseOut" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isButtonHover = ref<boolean>(false)

function onMouseOver() {
  isButtonHover.value = true
}

function onMouseOut() {
  isButtonHover.value = false
}
</script>
