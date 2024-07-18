export type InputProps = {
  name?: string
  error?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
}

export type InputFieldOmits =
  | 'name'
  | 'error'
  | 'disabled'
  | 'readonly'
  | 'placeholder'
  | 'hideDetails'
  | 'errorMessages'
  | 'color'

export type FieldProps = {
  fieldLabel?: string
  fieldDescription?: string
  fieldTooltip?: string
}
