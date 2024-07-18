import type { VSelect } from 'vuetify/components'

import { ColorType } from '@/types/common/ColorType'
import { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

export type SelectFieldItemType = {
  title: string
  value: string | number
  subtitle?: string
}

interface SelectFieldInterface extends /* @vue-ignore */ Partial<VSelect['$props']> {}

export type SelectFieldProps = InputProps &
  FieldProps &
  Omit<SelectFieldInterface, ReservedKeys | InputFieldOmits | 'items'> & {
    items: Array<SelectFieldItemType>
    searchable?: boolean
    color?: ColorType
    multiple?: boolean
  }
