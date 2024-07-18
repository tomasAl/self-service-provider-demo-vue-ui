import { VBtn } from 'vuetify/components'

import { ColorType } from '@/types/common/ColorType'
import { ReservedKeys } from '@/types/reserved/ReservedKeys'

interface ButtonInterface extends /* @vue-ignore */ Partial<VBtn['$props']> {}

export type ButtonProps = Omit<ButtonInterface, ReservedKeys | 'color' | 'variant'> & {
  color?: ColorType
  variant?: 'tonal' | 'outlined' | 'text'
  loading?: boolean
}
