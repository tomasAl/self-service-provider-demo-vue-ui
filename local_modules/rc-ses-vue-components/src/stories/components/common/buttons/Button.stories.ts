import { StoryFn } from '@storybook/vue3'

import Button from '@/components/common/buttons/Button/Button.vue'
import ButtonArgTypes from '@/stories/components/argTypes/components/ButtonArgTypes'
import { ButtonProps } from '@/types/common/ButtonProps'

export default {
  title: 'components/common/buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: ButtonArgTypes,
}

const Template: StoryFn<ButtonProps> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <div class="storybook-field">
      <div class="storybook-field-view">
        <Button v-bind="args">Click Me!</Button>
      </div>
      <div class="storybook-field-previews">
        <div class="storybook-field-previews-title">State previews</div>
        <Button color="secondary">Click Me!</Button>
        <Button color="error">Click Me!</Button>
        <Button color="warning">Click Me!</Button>
      </div>
    </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  loading: false,
}
