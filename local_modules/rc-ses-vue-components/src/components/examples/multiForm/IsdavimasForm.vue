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
        title: 'Padalinys 1',
        value: 'p1',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Padalinys 2', value: 'p2' },
      { title: 'Padalinys 3', value: 'p3' },
      {
        title: 'Padalinys 4',
        value: 'p4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ]"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modelRCPadalinys = ref()
</script>
