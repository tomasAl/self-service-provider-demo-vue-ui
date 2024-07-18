<template>
  <Button
    variant="text"
    color="primary-700"
    prepend-icon="$prev"
    class="font-weight-regular"
    >Baigti pildyti vėliau</Button
  >
  <div class="flex-grow-1" />
  <Button size="large" class="text-body-2 font-weight-strong">
    Pridėti į krepšelį
    <template #append>
      <ArrowRightIcon color="grey-900" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/assets/icons/regular/ArrowRightIcon.vue'
</script>
