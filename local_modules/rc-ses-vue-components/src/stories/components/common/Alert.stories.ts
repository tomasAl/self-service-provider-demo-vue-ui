// Alert.stories.ts
import { Meta, StoryFn } from '@storybook/vue3'

import Alert from '@/components/common/Alert/Alert.vue'
import { AlertProps } from '@/types/common/AlertProps'

export default {
  title: 'components/common/Alert',
  component: Alert,

  tags: ['autodocs'],
} as Meta

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const Template: StoryFn<AlertProps> = (args) => ({
  components: { Alert },
  setup() {
    return { args, lorem }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <Alert v-bind="args"></Alert>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <Alert class="form-control" title="Info" type="info" >{{ lorem }}</Alert>
        <Alert class="form-control" title="Warning" type="warning" >{{ lorem }}</Alert>
        <Alert class="form-control" title="Error" type="error" >{{ lorem }}</Alert>
        <Alert class="form-control" title="Success" type="success" >{{ lorem }}</Alert>

      </div>
    </div>
  `,
})

export const Main = Template.bind({})
Main.args = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  id: 'sutikimas',
}
