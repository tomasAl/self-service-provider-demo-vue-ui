<script setup lang="ts">
  import { HeaderPanel, StepFormLayout } from 'rc-ses-vue-components';

  import FormActions from './FormActions.vue';
  import FormActionsFooter from './FormActionsFooter.vue';
  import UserDetailsSection from './UserDetailsSection.vue';
  import ServiceDeliveryForm from './ServiceDeliveryForm.vue';
  import ServiceForm from './ServiceForm.vue';

  const steps = [
    {
      id: 'step1',
      title: 'Vartotojo duomenys',
      completed: true,
      active: false,
      expanded: false,
      component: UserDetailsSection,
    },
    {
      id: 'step2',
      title: 'Paslaugos užsakymo forma',
      completed: false,
      active: true,
      expanded: true,
      component: ServiceForm,
    },
    {
      id: 'step3',
      title: 'Paslaugos išdavimas',
      completed: false,
      active: false,
      expanded: false,
      component: ServiceDeliveryForm,
    },
  ];
</script>

<template>
  <HeaderPanel
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

  <StepFormLayout :items="steps">
    <template #actions>
      <FormActions />
    </template>

    <template #actions-after>
      <FormActionsFooter />
    </template>
  </StepFormLayout>
</template>
