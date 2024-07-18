// NumberStepperField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import NumberStepperField from '@/components/common/inputs/NumberStepperField/NumberStepperField.vue'
import { NumberStepperFieldProps } from '@/types/inputs/NumberStepperProps'
import NumberStepperArgTypes from '@/stories/components/argTypes/components/NumberStepperArgTypes'

export default {
  title: 'components/common/inputs/NumberStepperField',
  component: NumberStepperField,
  argTypes: NumberStepperArgTypes,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<NumberStepperFieldProps> = (args) => ({
  components: { NumberStepperField },
  setup() {
    const modelReadOnly = ref('Negalima redaguoti')
    const modelDisabled = ref('Neaktyvus laukas')

    return { args, modelReadOnly, modelDisabled }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <NumberStepperField v-bind="args"></NumberStepperField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <NumberStepperField class="form-control" label="Read-only" readonly v-model="modelReadOnly"></NumberStepperField>
        <NumberStepperField class="form-control" label="Disabled" disabled v-model="modelDisabled"></NumberStepperField>
        <NumberStepperField label="Error" error="Klaidos pranešimas"></NumberStepperField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  fieldLabel: 'Egzempliorių skaičius',
  fieldDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  name: 'kiekis',
}
