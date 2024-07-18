import { FormWrapperPanelProps } from '../forms/FormWrapperProps'
import { VerticalStepperItemProps } from '../steppers/VerticalStepperProps'

export type StepPageLayoutItemProps = VerticalStepperItemProps & FormWrapperPanelProps

export type StepFormLayoutProps = {
  items: Array<StepPageLayoutItemProps>
  singleForm?: boolean
}
