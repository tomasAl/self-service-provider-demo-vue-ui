// CheckboxField.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import CheckboxField from '@/components/common/inputs/CheckboxField/CheckboxField.vue'
import { CheckboxFieldProps } from '@/types/inputs/CheckboxFieldProps'

export default {
  title: 'components/common/inputs/CheckboxField',
  component: CheckboxField,

  tags: ['autodocs'],
} as Meta

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const Template: StoryFn<CheckboxFieldProps> = (args) => ({
  components: { CheckboxField },
  setup() {
    const model = ref(false)
    const modelReadOnly = ref(true)
    const modelError = ref(true)

    return { args, modelReadOnly, model, modelError, lorem }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <CheckboxField v-bind="args" v-model="model">{{ lorem }}</CheckboxField>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <CheckboxField class="form-control" label="Read-only" readonly v-model="modelReadOnly">{{ lorem }}</CheckboxField>
        <CheckboxField class="form-control" label="Disabled" disabled v-model="modelDisabled">{{ lorem }}</CheckboxField>
        <CheckboxField v-model="modelError" label="Error" error="Klaidos pranešimas">{{ lorem }}</CheckboxField>
      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  label: 'Sutikimas',
  name: 'sutikimas',
}
