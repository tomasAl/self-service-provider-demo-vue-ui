<script setup lang="ts">
  /*
   * @MICROFRONTEND
   *
   * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
   * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
   * kaip npm biblioteka.
   */
  import { addToCart } from '@rc-ses/self-service-portal-ui';
  import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';

  import { Button } from '@rc-ses/vue-components';
  import { ArrowRightIcon } from '@rc-ses/vue-components/icons'
</script>

<template>
  <Button
    variant="text"
    color="primary-700"
    prepend-icon="$prev"
    class="font-weight-regular"
    @click="() => redirectToLanding()"
  >Baigti pildyti vėliau</Button
  >
  <div class="flex-grow-1" />
  <Button size="large" class="text-body-2 font-weight-strong" v-on:click="() => addToCart('Vue paslauga #1')">
    Pridėti į krepšelį
    <template #append>
      <ArrowRightIcon color="grey-900" />
    </template>
  </Button>
</template>
