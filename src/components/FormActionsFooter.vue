<script setup lang="ts">
  /*
   * @MICROFRONTEND
   *
   * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
   * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
   * kaip npm biblioteka.
   */
  import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';

  import { RcSesButton } from '@registrucentras/rc-ses-vue-components';
</script>

<!-- @MICROFRONTEND-->
<!-- `redirectToLanding` metodo kvietimas, kurį eksportuoja-->
<!-- single-spa modulis @rc-ses/self-service-portal-ui-root-->
<template>
  <div class="d-flex pt-4 justify-center">
    <RcSesButton variant="text" color="grey-600" class="text-decoration-underline" @click="() => redirectToLanding()"
      >Atšaukti pildymą ir ištrinti formos duomenis</RcSesButton
    >
  </div>
</template>
