const useIconProps = {
  tag: {
    type: String,
    required: false,
  },
  size: {
    type: [Number, String],
    required: false,
    default: 24 as const,
  },
  color: {
    type: String,
    required: false,
    default: '',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
}

/* export type IconProps = {
  [Key in keyof IconPropsBase]: IconPropsBase[Key]
}; */

export default useIconProps
