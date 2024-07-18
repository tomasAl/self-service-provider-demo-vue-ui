import { FormPanelProps } from './FormPanelProps'

export type FormWrapperPanelProps = FormPanelProps & {
  expanded?: boolean
  component?: any
}

export type FormWrapperProps = {
  panels: Array<FormWrapperPanelProps>
  hideTopActions?: boolean
}
