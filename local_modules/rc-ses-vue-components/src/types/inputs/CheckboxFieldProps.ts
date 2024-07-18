import type { VCheckbox } from 'vuetify/components'

import { ColorType } from '@/types/common/ColorType'
import { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface CheckboxInterface extends /* @vue-ignore */ Partial<VCheckbox['$props']> {}

export type CheckboxProps = InputProps &
  Omit<CheckboxInterface, ReservedKeys | InputFieldOmits | 'label' | 'modelValue'> & {
    color?: ColorType
    label?: string
  }

export type CheckboxFieldProps = FieldProps & CheckboxProps
