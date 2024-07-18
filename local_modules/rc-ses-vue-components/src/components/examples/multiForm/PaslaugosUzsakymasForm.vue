<template>
  <SelectField
    v-model="modelTikslas"
    class="form-control"
    field-label="Tikslas"
    placeholder="Pasirinkite"
    :searchable="true"
    :multiple="true"
    :items="[
      {
        title: 'Tikslas 1',
        value: 't1',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Tikslas 2', value: 't2' },
      { title: 'Tikslas 3', value: 't3' },
      {
        title: 'Tikslas 4',
        value: 't4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Tikslas 5', value: 't5' },
      { title: 'Tikslas 6', value: 't6' },
    ]"
  />

  <SelectField
    v-model="modelTikslas"
    class="form-control"
    field-label="Teisinis pagrindas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    placeholder="Pasirinkite"
    :searchable="true"
    :multiple="false"
    :items="[
      {
        title: 'Pagrindas 1',
        value: 'p1',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Pagrindas 2', value: 'p2' },
      { title: 'Pagrindas 3', value: 'p3' },
      {
        title: 'Pagrindas 4',
        value: 'p4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Pagrindas 5', value: 'p5' },
      { title: 'Pagrindas 6', value: 'p6' },
    ]"
  />

  <CheckboxField
    v-model="modelSutikimas"
    class="form-control"
    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    field-label="Sutikimas"
  />

  <SelectField
    v-model="modelTerminas"
    class="form-control"
    field-label="Terminas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    placeholder="Pasirinkite"
    :searchable="false"
    :multiple="false"
    :items="[
      {
        title: 'Terminas 1',
        value: 't1',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      { title: 'Terminas 2', value: 't2' },
      { title: 'Temrinas 3', value: 't3' },
      {
        title: 'Temrinas 4',
        value: 't4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ]"
  />

  <NumberStepperField
    field-label="Egzempliorių skaičius"
    field-description="(neprivaloma)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modelTikslas = ref()
const modelSutikimas = ref()
const modelTerminas = ref()
</script>
