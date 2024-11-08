<script setup lang="ts">
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import { configure, Field, Form as VeeForm, useForm } from 'vee-validate'
import {
  RcSesCheckboxField,
  RcSesDatePickerField,
  RcSesFileDropzoneField,
  RcSesNumberStepperField,
  RcSesPhoneField,
  RcSesRadioButtonsField,
  RcSesRadioField,
  RcSesSearchableField,
  RcSesSelectField,
  RcSesTextAreaField,
  RcSesTextField,
  RcSesTimePickerField
} from '@registrucentras/rc-ses-vue-components'
import SearchModal from '../shared/modals/SearchModal.vue'

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: false
})

const FormSchema = yup.object({
  trumpas: yup.string().required(),
  ilgas: yup.string().required(),
  tikslas: yup.array().required().min(1),
  telefonas: yup
    .object()
    .shape({
      country: yup.object().required(),
      value: yup.string().required()
    })
    .required(),
  ieskoti: yup.string().required(),
  data: yup.string().required(),
  sutikimas: yup.boolean().required(),
  laikotarpis: yup.array().required(),
  laikas: yup.string().required(),
  skaicius: yup.number().required().min(5),
  radioPasirinkimas: yup.string().required(),
  radioButtonsPasirinkimas: yup.string().required()
})

useForm({
  validationSchema: toTypedSchema(FormSchema),
  validateOnMount: false
})

function onSubmit(values: any) {
  // eslint-disable-next-line no-console
  console.debug('Form submitted with values:', values)
}
</script>

<template>
  <VeeForm v-slot="{ handleSubmit }" as="div" :validation-schema="FormSchema">
    <form novalidate @submit="handleSubmit($event, onSubmit)">
      <Field v-slot="fieldProps" name="trumpas">
        <RcSesTextField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Trumpas tekstas"
          field-description="lorem ipsum."
          name="trumpas"
          placeholder="Tekstas"
          messages="Lorem Ipsum is simply dummy text."
          counter="10"
        ></RcSesTextField>
      </Field>

      <Field v-slot="fieldProps" name="ilgas">
        <RcSesTextAreaField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          :rows="2"
          :field-tooltip-on-click="true"
          field-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          field-label="Ilgas tekstas"
          field-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          name="ilgas"
          placeholder="Tekstas"
          messages="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          counter="300"
        ></RcSesTextAreaField>
      </Field>

      <Field v-slot="fieldProps" name="tikslas">
        <RcSesSelectField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          name="tikslas"
          class="form-control"
          field-label="Tikslas"
          placeholder="Pasirinkite"
          :searchable="true"
          :multiple="true"
          :items="[
            {
              title: 'Tikslas 1',
              value: 't1',
              subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            { title: 'Tikslas 2', value: 't2' },
            { title: 'Tikslas 3', value: 't3' },
            {
              title: 'Tikslas 4',
              value: 't4',
              subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            { title: 'Tikslas 5', value: 't5' },
            { title: 'Tikslas 6', value: 't6' }
          ]"
        />
      </Field>

      <Field v-slot="fieldProps" name="telefonas">
        <RcSesPhoneField
          :vee-field="fieldProps"
          field-label="Telefono Nr."
          class="form-control"
          default-iso="lt"
          name="telefonas"
        />
      </Field>

      <Field v-slot="fieldProps" name="ieskoti">
        <RcSesSearchableField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Ieškoti"
          class="form-control"
          :modal-component="SearchModal"
          name="ieskoti"
        />
      </Field>

      <Field v-slot="fieldProps" name="data">
        <RcSesDatePickerField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Data"
          class="form-control"
          :max-width="150"
          placeholder="Data"
          name="data"
        />
      </Field>

      <Field v-slot="fieldProps" name="laikotarpis">
        <RcSesDatePickerField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Laikotarpis"
          class="form-control"
          range
          :max-width="300"
          placeholder="Pradžia  →  Pabaiga"
          name="laikotarpis"
        />
      </Field>

      <Field v-slot="fieldProps" name="laikas">
        <RcSesTimePickerField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Laikas"
          class="form-control"
          :max-width="300"
          placeholder="Pasirinkite laiką"
          name="laikas"
        />
      </Field>

      <Field v-slot="fieldProps" name="skaicius">
        <RcSesNumberStepperField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Skaičius"
          :max-width="300"
          name="skaicius"
        />
      </Field>

      <Field v-slot="fieldProps" name="sutikimas">
        <RcSesCheckboxField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          :field-wrapper-props="{
            class: 'form-control'
          }"
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          field-label="Sutikimas"
          name="sutikimas"
        />
      </Field>

      <Field v-slot="fieldProps" name="sutikimasTooltip">
        <RcSesCheckboxField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          :field-wrapper-props="{
            class: 'form-control'
          }"
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          field-label="Sutikimas + tooltip"
          name="sutikimasTooltip"
        >
          <template #label="labelProps">
            <span v-bind="labelProps">{{ labelProps.label }}</span>
            <RcSesTooltip title="Tooltip title" description="Tooltip description"></RcSesTooltip>
          </template>
        </RcSesCheckboxField>
      </Field>

      <Field v-slot="fieldProps" name="pavadinimas">
        <RcSesTextField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          class="form-control"
          field-label="Pavadinimas"
          name="pavadinimas"
          placeholder="Pavadinimas"
        />
      </Field>

      <Field v-slot="fieldProps" name="radioPasirinkimas">
        <RcSesRadioField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Pasirinkimas"
          :field-wrapper-props="{
            class: 'form-control'
          }"
          class="bg-grey-100 pa-2"
          name="radioPasirinkimas"
          :options="[
            { value: 'p1', label: 'Pasirinkimas #1' },
            { value: 'p2', label: 'Pasirinkimas #2' },
            { value: 'p3', label: 'Pasirinkimas #3' },
            { value: 'p4', label: 'Pasirinkimas #4' },
            { value: 'p5', label: 'Labai ilgas pasirinkimas #5' }
          ]"
        />
      </Field>

      <Field v-slot="fieldProps" name="radioPasirinkimas">
        <RcSesRadioField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Pasirinkimas"
          :field-wrapper-props="{
            class: 'form-control'
          }"
          class="pa-2"
          name="radioPasirinkimas"
          :options="[
            { value: 'p1', label: 'Pasirinkimas #1' },
            { value: 'p2', label: 'Pasirinkimas #2' },
            { value: 'p3', label: 'Pasirinkimas #3' },
            { value: 'p4', label: 'Pasirinkimas #4' },
            { value: 'p5', label: 'Labai ilgas pasirinkimas #5' }
          ]"
        />
      </Field>

      <Field v-slot="fieldProps" name="radioButtonsPasirinkimas">
        <RcSesRadioButtonsField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          :field-wrapper-props="{
            class: 'form-control'
          }"
          field-label="Pasirinkimas"
          name="radioButtonsPasirinkimas"
          :options="[
            { value: 'p1', label: 'Pasirinkimas #1' },
            { value: 'p2', label: 'Pasirinkimas #2' },
            { value: 'p3', label: 'Pasirinkimas #3' },
            { value: 'p4', label: 'Pasirinkimas #4' },
            { value: 'p5', label: 'Labai ilgas pasirinkimas #5' }
          ]"
        />
      </Field>
      <Field v-slot="fieldProps" name="files">
        <RcSesFileDropzoneField
          v-bind="fieldProps.field"
          :error="fieldProps.errorMessage"
          field-label="Įkelti dokumentus"
          name="files"
          multiple
        />
      </Field>

      <div class="d-flex justify-end mt-5">
        <v-btn type="submit" color="primary">Submit</v-btn>
      </div>
    </form>
  </VeeForm>
</template>
