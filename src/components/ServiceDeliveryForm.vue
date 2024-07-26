<script setup lang="ts">
  import { ref } from 'vue'
  import { Alert, RadioButtonsField, SelectField } from '@rc-ses/vue-components';

  const modelRCPadalinys = ref()
</script>

<template>
  <Alert variant="light" type="warning" class="form-control">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Alert>

  <RadioButtonsField
    field-label="Išdavimo būdas"
    class="form-control"
    :options="[
      { label: 'El. paštu', value: 'option1' },
      { label: 'Padalinye', value: 'option2' },
      { label: 'Paštu Lietuvoje', value: 'option3' },
      { label: 'Paštu užsienyje', value: 'option4' },
    ]"
  ></RadioButtonsField>

  <SelectField
    v-model="modelRCPadalinys"
    class="form-control"
    field-label="RC padalinys"
    placeholder="Pasirinkite"
    :searchable="false"
    :multiple="false"
    :items="[
      {
        title: 'Lvivo g. 25-101',
        value: 'vilnius',
        subtitle: '09320 Vilnius',
      },
      {
        title: 'E. Ožeškienės g. 12',
        value: 'kaunas',
        subtitle: '44252 Kaunas, (įėjimas iš L. Sapiegos gatvės pusės)',
      },
      {
        title: 'Baltijos pr. 123-1',
        value: 'klaipeda',
        subtitle: '93224 Klaipėda',
      },
      {
        title: 'Baltijos pr. 123-1',
        value: 'siauliai',
        subtitle: '78167 Šiauliai',
      },
      {
        title: 'Baltijos pr. 123-1',
        value: 'panevezys',
        subtitle: '35173 Panevėžys',
      },
    ]"
  />
</template>
