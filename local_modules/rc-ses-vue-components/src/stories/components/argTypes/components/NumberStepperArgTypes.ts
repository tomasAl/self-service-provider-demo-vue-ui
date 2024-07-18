import FieldArgTypes from '@/stories/components/argTypes/common/FieldArgTypes'
import InputArgTypes from '@/stories/components/argTypes/common/InputArgTypes'

export default {
  ...FieldArgTypes,
  ...InputArgTypes,
  min: {
    control: 'number',
    type: 'number',
  },
  max: {
    control: 'number',
    type: 'number',
  },
  step: {
    control: 'number',
    type: 'number',
  },
}
