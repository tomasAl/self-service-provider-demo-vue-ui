<template>
  <HeaderPanel
    drop-shadow
    :breadcrumbs="[
      {
        title: 'Pradžia',
        href: '/',
      },
      {
        title: 'Paslaugos užsakymo forma',
      },
    ]"
    title="Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą"
    description="Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
        pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
        galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
        padalinyje."
  >
  </HeaderPanel>
  <ExampleSingleForm />
</template>

<script setup lang="ts">
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'
</script>
