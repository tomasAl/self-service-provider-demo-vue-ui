import { TextFieldProps } from '@/types/inputs/TextFieldProps'

export type SearchFieldProps = Omit<TextFieldProps, 'prependInnerIcon' | 'modelValue'>
