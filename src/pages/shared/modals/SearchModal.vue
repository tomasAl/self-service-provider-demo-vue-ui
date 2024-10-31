<template>
  <v-dialog v-model="dialog" max-width="900px">
    <v-card>
      <v-card-title class="py-6 px-6">Paieška pagal adresą</v-card-title>

      <v-card-text>
        <VeeForm v-slot="{ handleSubmit }" :validation-schema="FormSchema" as="div">
          <form @submit="handleSubmit($event, handleFormSubmit)">
            <Field name="city">
              <template #default="{ field, errorMessage }">
                <RcSesTextField
                  v-bind="field"
                  :error="errorMessage"
                  class="form-control"
                  field-label="Miestas"
                  placeholder="Įveskite miestą"
                />
              </template>
            </Field>
            <Field name="street">
              <template #default="{ field, errorMessage }">
                <RcSesTextField
                  v-bind="field"
                  :error="errorMessage"
                  class="form-control"
                  field-label="Gatvė"
                  placeholder="Įveskite gatvę"
                />
              </template>
            </Field>
            <Field name="addressNo">
              <template #default="{ field, errorMessage }">
                <RcSesTextField
                  v-bind="field"
                  :error="errorMessage"
                  class="form-control"
                  field-label="Pastato nr."
                  placeholder="Įveskite pastato numerį"
                />
              </template>
            </Field>
            <Field name="housingNo">
              <template #default="{ field, errorMessage }">
                <RcSesTextField
                  v-bind="field"
                  :error="errorMessage"
                  class="form-control"
                  field-label="Korpuso nr."
                  placeholder="Įveskite korpuso numerį"
                />
              </template>
            </Field>
            <Field name="aptNo">
              <template #default="{ field, errorMessage }">
                <RcSesTextField
                  v-bind="field"
                  :error="errorMessage"
                  class="form-control"
                  field-label="Patalpos nr."
                  placeholder="Įveskite patalpos numerį"
                />
              </template>
            </Field>

            <div class="text-right">
              <RcSesButton type="submit" color="primary" class="mr-2"
                >Ieškoti</RcSesButton
              >
              <RcSesButton color="grey" variant="outlined" @click="handleOnReset">
                Išvalyti
              </RcSesButton>
            </div>
          </form>
        </VeeForm>

        <div v-if="results.length">
          <v-divider class="mt-6 mb-4"></v-divider>
          <v-table>
            <thead>
              <tr>
                <th>Reg. Nr.</th>
                <th>Daiktas(-ai)</th>
                <th>Unikalus Nr.</th>
                <th>Adresas</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in results" :key="row.regNo">
                <td>{{ row.regNo }}</td>
                <td>{{ row.type }}</td>
                <td>{{ row.uniqueIdentifier }}</td>
                <td>{{ row.address }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-card-text>

      <v-card-actions class="px-6 py-4 bg-grey-50">
        <RcSesButton
          class="mr-2"
          color="primary"
          :disabled="!results.length"
          @click="handleOnSubmit"
        >
          Pridėti
        </RcSesButton>
        <RcSesButton color="error" variant="outlined" @click="onClose">
          Atšaukti
        </RcSesButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Field, Form as VeeForm, useForm } from 'vee-validate'
import { computed, ref } from 'vue'
import * as yup from 'yup'
import { RcSesButton, RcSesTextField } from '@registrucentras/rc-ses-vue-components'

interface FormModel {
  city: string
  street: string
  addressNo: string
  housingNo: string
  aptNo: string
}

interface Result {
  regNo: string
  type: string
  uniqueIdentifier: string
  address: string
}

// Define props and emits
const props = defineProps<{
  modelValue: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}>()

const emit = defineEmits(['update:modelValue'])

// Dialog visibility
const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

// Form Schema using yup
const FormSchema = yup.object({
  city: yup.string().required('Miestas yra privalomas'),
  street: yup.string().required('Gatvė yra privaloma'),
  addressNo: yup.string().required('Pastato nr. yra privalomas'),
  housingNo: yup.string().required('Korpuso nr. yra privalomas'),
  aptNo: yup.string().required('Patalpos nr. yra privalomas'),
})

// Initialize form
const { resetForm } = useForm<FormModel>({
  validationSchema: FormSchema,
})

const results = ref<Result[]>([])

function handleFormSubmit() {
  results.value = [
    {
      regNo: '44/446848',
      type: 'Mišrus pastatas',
      uniqueIdentifier: '1099-2018-8012',
      address: 'Vilnius, Vydūno g. 17',
    },
  ]
}

// Handle form reset
const handleOnReset = () => {
  resetForm()
  results.value = []
}

// Handle adding the selected result
const handleOnSubmit = () => {
  if (results.value.length > 0 && results.value[0]) {
    props.onSubmit(`${results.value[0].type}: ${results.value[0].uniqueIdentifier}`)
    props.onClose()
    resetForm()
    results.value = []
  }
}
</script>
