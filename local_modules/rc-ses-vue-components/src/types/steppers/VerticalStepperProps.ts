export type VerticalStepperItemProps = {
  title: string
  active?: boolean
  completed?: boolean
}

export type VerticalStepperProps = {
  items: Array<VerticalStepperItemProps>
}
