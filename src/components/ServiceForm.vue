<script setup lang="ts">
  import { reactive, ref } from 'vue'

  const model = reactive({
    purpose: ref(),
    legalbasis: ref(),
    agreement: ref(),
    address: ref(),
    term: ref(),

    shortText: ref(),
    longText: ref(),

    phoneNo: ref(),
    searchable: ref(),
    someDate: ref(),
    someDateRange: ref(),
  })
</script>

<template>
  <SelectField
    class="form-control"
    v-model="model.purpose"
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
    class="form-control"
    v-model="model.legalbasis"
    field-label="Teisinis pagrindas"
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
    class="form-control"
    v-model="model.agreement"
    label="Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų neatskleisiu tretiesiems asmenims."
    field-label="Sutikimas"
  />

  <SelectField
    class="form-control"
    v-model="model.term"
    placeholder="Pasirinkite"
    field-label="Terminas"
    field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
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
      { title: 'Terminas 3', value: 't3' },
      {
        title: 'Terminas 4',
        value: 't4',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ]"
  />

  <SelectField
    class="form-control"
    v-model="model.address"
    field-label="Turto adresas"
    placeholder="Pasirinkite"
    :searchable="true"
    :multiple="false"
    :items="[
      {
        title: 'Lvivo g. 7',
        value: 'lvivo-g-7',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 9',
        value: 'lvivo-g-9',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 11',
        value: 'lvivo-g-11',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 11A',
        value: 'lvivo-g-11a',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 12',
        value: 'lvivo-g-12',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 13',
        value: 'lvivo-g-13',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 13A',
        value: 'lvivo-g-13a',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 13B',
        value: 'lvivo-g-13b',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
      {
        title: 'Lvivo g. 13C',
        value: 'lvivo-g-1c',
        subtitle: 'Vilnius, Vilniaus m. sav. 09313',
      },
    ]"
  />

  <NumberStepperField
    field-label="Egzempliorių skaičius"
    field-description="(neprivaloma)"
    :max-width="300"
  />

  <br />

  <TextField
    class="form-control"
    name="shortText"
    v-model="model.shortText"
    field-label="Trumpas tekstas"
    placeholder="Tekstas"
    counter="10"
  ></TextField>

  <TextField
    class="form-control"
    name="longText"
    v-model="model.longText"
    field-tooltip="Field tooltip content"
    field-label="Ilgas tekstas"
    placeholder="Tekstas"
    counter="300"
  ></TextField>

  <PhoneInputField
    class="form-control"
    v-model="model.phoneNo"
    field-label="Radio tipo pasirinkimas"
    field-description="(alternatyvus)"
    default-iso="lt"
  />

  <SearchField v-model="model.searchable" field-label="Paieška" class="form-control" />

  <DatePickerField
    v-model="model.someDate"
    field-label="Data"
    class="form-control"
    :max-width="150"
    placeholder="Data"
  />

  <DatePickerField
    class="form-control"
    v-model="model.someDateRange"
    field-label="Laikotarpis"
    range
    :max-width="300"
    placeholder="Pradžia → Pabaiga"
  />

  <FileInputField field-label="Bylos įkėlimas" class="form-control" />

  <v-divider class="form-control" />

  <RadioField
    class="form-control"
    field-label="Radio tipo pasirinkimas"
    :v-radio-group-props="{
      class: 'bg-grey-100',
    }"
    :options="[
      { value: 'p1', label: 'Pasirinkimas #1' },
      { value: 'p2', label: 'Pasirinkimas #2' },
      { value: 'p3', label: 'Pasirinkimas #3' },
      { value: 'p4', label: 'Pasirinkimas #4' },
      { value: 'p5', label: 'Labai ilgas pasirinkimas #5' },
    ]"
  />

  <RadioButtonsField
    v-model="model.someDateRange"
    field-label="Radio tipo pasirinkimas"
    field-description="(alternatyvus)"
    :options="[
      { value: 'p1', label: 'Pasirinkimas #1' },
      { value: 'p2', label: 'Pasirinkimas #2' },
      { value: 'p3', label: 'Pasirinkimas #3' },
      { value: 'p4', label: 'Pasirinkimas #4' },
      { value: 'p5', label: 'Labai ilgas pasirinkimas #5' },
    ]"
  />
</template>
