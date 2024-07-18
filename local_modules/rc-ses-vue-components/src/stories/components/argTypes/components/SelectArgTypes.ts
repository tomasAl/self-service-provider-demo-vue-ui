import FieldArgTypes from '@/stories/components/argTypes/common/FieldArgTypes'
import InputArgTypes from '@/stories/components/argTypes/common/InputArgTypes'

export default {
  ...FieldArgTypes,
  ...InputArgTypes,
  searchable: { control: 'boolean', type: 'boolean' },
  multiple: { control: 'boolean', type: 'boolean' },
}
