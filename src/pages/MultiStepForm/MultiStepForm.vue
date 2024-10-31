
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import IsdavimasForm from './components/IsdavimasForm.vue'
import { RcSesAccordion, RcSesFormContainer, useAccordionController } from '@registrucentras/rc-ses-vue-components';
import FormActionsAfter from "@/pages/shared/FormActionsAfter.vue";
import FormActions from "@/pages/shared/FormActions.vue";
import PapildomosPaslaugosForm from "@/pages/MultiStepForm/components/PapildomosPaslaugosForm.vue";
import PaslaugosUzsakymasForm from "@/pages/MultiStepForm/components/PaslaugosUzsakymasForm.vue";
import TerminaiForm from "@/pages/MultiStepForm/components/TerminaiForm.vue";

const accordionController = useAccordionController({
  basicForm: {
    expanded: false,
    state: 'completed',
    title: 'Bazinė informacija',
  },
  issueForm: {
    expanded: false,
    state: 'error',
    title: 'Išdavimas',
  },
  additionalServicesForm: {
    expanded: false,
    state: 'pending',
    title: 'Reikalingos papildomos paslaugos',
  },
  serviceForm: {
    expanded: true,
    state: 'active',
    title: 'Paslaugos užsakymas',
  },
  termsForm: {
    expanded: false,
    state: 'pending',
    title: 'Terminai ir sąlygos',
  },
})

const FormSchema = yup.object({
  isdavimoBudas: yup.string().required(),
  padalinys: yup.string().required(),
  skaicius: yup.number().required().min(5),
  paslauga: yup.string().required(),

  tikslas: yup.array().required(),
  teisinisPagrindas: yup.string().required(),
  sutikimas: yup.boolean().required(),
  terminas: yup.string().required(),
  egzemplioriuSkaicius: yup.number().required().min(5),

  terminoSutikimas: yup.boolean().required(),
})

const formController = useForm({
  validationSchema: toTypedSchema(FormSchema),
})
</script>

<template>
  <form>
    <RcSesFormContainer
      :accordion-controller="accordionController"
      :form-controller="formController"
      :show-progress-stepper="true"
      :show-accordion-collapse-controls="true"
    >
      <template #actions>
        <FormActions />
      </template>

      <template #actions-after>
        <FormActionsAfter />
      </template>

      <template #default>
        <RcSesAccordion id="basicForm" />

        <RcSesAccordion id="issueForm">
          <IsdavimasForm />
        </RcSesAccordion>

        <RcSesAccordion id="additionalServicesForm">
           <PapildomosPaslaugosForm :form-controller="formController" />
        </RcSesAccordion>
        <RcSesAccordion id="serviceForm">
           <PaslaugosUzsakymasForm :form-controller="formController" />
        </RcSesAccordion>

        <RcSesAccordion id="termsForm">
           <TerminaiForm />
        </RcSesAccordion>
      </template>
    </RcSesFormContainer>
  </form>
</template>
