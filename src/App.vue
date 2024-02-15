<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="text-h4" style="line-height: 1.235;">Vue demo paslauga</div>
    <RouterView />
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }
</style>
