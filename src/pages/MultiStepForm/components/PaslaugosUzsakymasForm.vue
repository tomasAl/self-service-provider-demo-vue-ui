<script setup lang="ts">
import { useForm } from 'vee-validate'

type PaslaugosUzsakymasFormProps = {
  formController: ReturnType<typeof useForm>
}

const props = defineProps<PaslaugosUzsakymasFormProps>()

const { errors, defineField } = props.formController

const [modelTikslas, modelTikslasProps] = defineField('tikslas')
const [modelTeisinisPagrindas, modelTeisinisPagrindasProps] =
  defineField('teisinisPagrindas')
const [modelSutikimas, modelSutikimasProps] = defineField('sutikimas')
const [modelTerminas, modelTerminasProps] = defineField('terminas')
const [modelEgzemplioriuSkaicius, modelEgzemplioriuSkaiciusProps] =
  defineField('egzemplioriuSkaicius')
</script>

<template>
  <RcSesSelectField
    v-model="modelTikslas"
    v-bind="modelTikslasProps"
    :error="errors.tikslas"
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
          'Daugiau informacijos rasite &lt;a href=&quot;https://www.registrucentras.lt&quot; target=&quot;_blank&quot;&gt;Registrucentras.lt&lt;/a&gt;',
      },
      { title: 'Tikslas 2', value: 't2' },
      { title: 'Tikslas 3', value: 't3' },
      {
        title: 'Tikslas 4',
        value: 't4',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      { title: 'Tikslas 5', value: 't5' },
      { title: 'Tikslas 6', value: 't6' },
    ]"
  />

  <RcSesSelectField
    v-model="modelTeisinisPagrindas"
    v-bind="modelTeisinisPagrindasProps"
    :error="errors.teisinisPagrindas"
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

  <RcSesCheckboxField
    v-model="modelSutikimas"
    v-bind="modelSutikimasProps"
    :error="errors.sutikimas"
    :field-wrapper-props="{ class: 'form-control' }"
    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    field-label="Sutikimas"
  />

  <RcSesSelectField
    v-model="modelTerminas"
    v-bind="modelTerminasProps"
    :error="errors.terminas"
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

  <RcSesNumberStepperField
    v-model="modelEgzemplioriuSkaicius"
    v-bind="modelEgzemplioriuSkaiciusProps"
    :error="errors.egzemplioriuSkaicius"
    field-label="Egzempliorių skaičius"
    field-description="(neprivaloma)"
  />
</template>
