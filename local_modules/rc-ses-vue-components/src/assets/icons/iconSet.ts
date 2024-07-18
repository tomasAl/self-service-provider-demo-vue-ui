import { Component, h } from 'vue'
import type { IconAliases, IconProps, IconSet } from 'vuetify'

import CaretDownFilledIcon from '@/assets/icons/filled/CaretDownFilledIcon.vue'
import CheckCircleFilledIcon from '@/assets/icons/filled/CheckCircleFilledIcon.vue'
import InfoFilledIcon from '@/assets/icons/filled/InfoFilledIcon.vue'
import WarningDiamondFilledIcon from '@/assets/icons/filled/WarningDiamondFilledIcon.vue'
import WarningFilledIcon from '@/assets/icons/filled/WarningFilledIcon.vue'
import CheckboxOffIcon from '@/assets/icons/inputs/CheckboxOffIcon.vue'
import CheckboxOnIcon from '@/assets/icons/inputs/CheckboxOnIcon.vue'
import RadioOnIcon from '@/assets/icons/inputs/RadioOnIcon.vue'
import CalendarBlankIcon from '@/assets/icons/regular/CalendarBlankIcon.vue'
import CaretDownIcon from '@/assets/icons/regular/CaretDownIcon.vue'
import CaretRightIcon from '@/assets/icons/regular/CaretRightIcon.vue'
import CheckIcon from '@/assets/icons/regular/CheckIcon.vue'
import CheckSuccessIcon from '@/assets/icons/regular/CheckSuccessIcon.vue'
import MinusIcon from '@/assets/icons/regular/MinusIcon.vue'
import PaperclipIcon from '@/assets/icons/regular/PaperclipIcon.vue'
import PlusIcon from '@/assets/icons/regular/PlusIcon.vue'
import QuestionIcon from '@/assets/icons/regular/QuestionIcon.vue'
import UploadIcon from '@/assets/icons/regular/UploadIcon.vue'

import XCircleFilledIcon from './filled/XCircleFilledIcon.vue'
import RadioOffIcon from './inputs/RadioOffIcon.vue'
import CaretLeftIcon from './regular/CaretLeftIcon.vue'
import CaretUpIcon from './regular/CaretUpIcon.vue'
import MagnifyingGlassIcon from './regular/MagnifyingGlassIcon.vue'
import XIcon from './regular/XIcon.vue'

const Icon16px = (icon: Component, color?: string) => h(icon, { size: 16, color })

const aliases: IconAliases = {
  calendar: CalendarBlankIcon,
  checkboxIndeterminate: CheckboxOffIcon,
  checkboxOff: CheckboxOffIcon,
  checkboxOn: CheckboxOnIcon,
  clear: XCircleFilledIcon,
  delete: undefined,
  delimiter: undefined,
  dropdown: Icon16px(CaretDownFilledIcon),
  edit: undefined,
  error: WarningDiamondFilledIcon,
  expand: CaretDownIcon,
  file: PaperclipIcon,
  first: undefined,
  info: InfoFilledIcon,
  last: undefined,
  loading: undefined,
  menu: undefined,
  minus: MinusIcon,
  next: CaretRightIcon,
  plus: PlusIcon,
  prev: CaretLeftIcon,
  radioOff: RadioOffIcon,
  radioOn: RadioOnIcon,
  ratingEmpty: undefined,
  ratingFull: undefined,
  ratingHalf: undefined,
  sortAsc: undefined,
  sortDesc: undefined,
  subgroup: QuestionIcon,
  success: CheckCircleFilledIcon,
  unfold: undefined,
  warning: WarningFilledIcon,
  collapse: CaretUpIcon,
  complete: undefined,
  cancel: undefined,
  close: XIcon,
  closeFilled: XCircleFilledIcon,
  back: CaretLeftIcon,
  search: MagnifyingGlassIcon,
  checkPrimary: Icon16px(CheckIcon, 'primary'),
  upload: UploadIcon,
  tooltip: QuestionIcon,
}

const rcIcons: IconSet = {
  component: (props: IconProps) => {
    switch (props.icon) {
      case 'rc-caret-left':
        return h(CaretLeftIcon, props)

      case 'rc-success':
        return h(CheckSuccessIcon, props)

      // Add other cases here
      default:
        return h('span') // Fallback if the icon is not found
    }
  },
}

export { aliases, rcIcons }
