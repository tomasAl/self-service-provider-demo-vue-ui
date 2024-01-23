<script setup lang="ts">
  import { addToCart } from '@rc-ses/self-service-portal-ui';
  import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';
  import UserDetailsSection from './UserDetailsSection.vue';

  const serviceName = 'Vue paslauga #1';
</script>

<template>
  <div>
    <user-details-section />

    <span class="text-h6" style="margin-right: .5rem; vertical-align: sub;">{{ serviceName }}</span>

    <v-btn
      type='button'
      color="primary"
      elevation="0"
      v-on:click="() => addToCart(serviceName)"
    >Pridėti paslaugą į krepšelį</v-btn>
  </div>

  <div>
    <v-btn
      type='button'
      color="primary"
      variant='text'
      @click="() => redirectToLanding()"
    >Grįžti į titulinį</v-btn>
  </div>
</template>
