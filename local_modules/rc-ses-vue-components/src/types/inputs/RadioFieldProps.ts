import { OptionType } from '@/types/common/OptionType'
import { FieldProps, InputProps } from '@/types/inputs/FieldProps'

export type RadioFieldProps = FieldProps &
  Omit<InputProps, 'placeholder'> & {
    options: Array<OptionType>
    variant?: 'text' | 'outlined'
    name?: string
  }

export type RadioButtonsFieldProps = Omit<RadioFieldProps, 'variant'>
