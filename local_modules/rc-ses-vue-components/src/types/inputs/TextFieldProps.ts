import type { VTextField } from 'vuetify/components'

import { FieldProps, InputFieldOmits, InputProps } from '@/types/inputs/FieldProps'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface TextFieldInterface extends /* @vue-ignore */ Partial<VTextField['$props']> {}

export type TextFieldProps = FieldProps &
  InputProps &
  Omit<TextFieldInterface, ReservedKeys | InputFieldOmits> & {
  counter?: string | number | boolean
  messages?: string | readonly string[]
}
