<script setup lang="ts">
import { useForm } from 'vee-validate'

type PapildomosPaslaugosFormProps = {
  formController: ReturnType<typeof useForm>
}

const props = defineProps<PapildomosPaslaugosFormProps>()

const { errors, defineField } = props.formController

const [modelPaslauga, modelPaslaugaProps] = defineField('paslauga')
</script>

<template>
  <RcSesTextField
    v-model="modelPaslauga"
    v-bind="modelPaslaugaProps"
    :error="errors.paslauga"
    field-label="Paslaugos pavadinimas"
  />
</template>
