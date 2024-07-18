<template>
  <v-container>
    <v-row>
      <v-col md="4" lg="3" xl="2" class="d-none d-md-flex">
        <VerticalStepper
          v-if="verticalStepperItems.length > 1 || !singleForm"
          :items="verticalStepperItems"
          style="margin-top: 2.875rem"
        ></VerticalStepper>
      </v-col>
      <v-col sm="12" md="8" lg="9" xl="10">
        <template v-for="(item, index) in items">
          <FormWrapper
            v-if="item?.active"
            :key="index"
            :panels="formPanels"
            :hide-top-actions="singleForm"
          />
        </template>

        <FormActionPanel v-if="$slots.actions">
          <slot name="actions"></slot>
        </FormActionPanel>

        <slot v-if="$slots['actions-after']" name="actions-after" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { FormWrapperPanelProps } from '@/types/forms/FormWrapperProps'
import { StepFormLayoutProps } from '@/types/layouts/StepFormLayoutProps'
import { VerticalStepperItemProps } from '@/types/steppers/VerticalStepperProps'

const props = defineProps<StepFormLayoutProps>()
const verticalStepperItems: Array<VerticalStepperItemProps> = props.items
const formPanels: Array<FormWrapperPanelProps> = props.items
</script>
