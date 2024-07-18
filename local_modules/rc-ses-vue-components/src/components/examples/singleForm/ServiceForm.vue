<template>
  <TextField
    v-model="modelTrumpasTekstas"
    class="form-control"
    field-label="Trumpas tekstas"
    field-description="lorem ipsum."
    name="trumpas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text."
    counter="10"
  ></TextField>

  <TextField
    v-model="modelIlgasTekstas"
    class="form-control"
    field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    field-label="Ilgas tekstas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    name="ilgas_tekstas"
    placeholder="Tekstas"
    messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    counter="300"
  ></TextField>

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

  <SearchField v-model="modelIeskoti" field-label="Ieškoti" class="form-control" />

  <NumberStepperField
    v-model="modelSkaicius"
    class="form-control"
    field-label="Skaičius"
    :max-width="300"
  />

  <CheckboxField
    v-model="modelSutikimas"
    class="form-control"
    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    field-label="Sutikimas"
    error="oh"
  />

</template>

<script setup lang="ts">
const modelTrumpasTekstas = ref()
const modelIlgasTekstas = ref()
const modelTikslas = ref()
const modelIeskoti = ref()
const modelSkaicius = ref()
const modelSutikimas = ref()
</script>
