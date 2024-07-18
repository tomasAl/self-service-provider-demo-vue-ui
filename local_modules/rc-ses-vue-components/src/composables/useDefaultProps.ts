import { ComputedRef, computed } from 'vue'

type PropsObject = Record<string, any>
type DefaultValuesObject = Record<string, string | number | boolean | undefined>

export default function useDefaultProps(
  props: any,
  defaultValues: DefaultValuesObject,
): ComputedRef<PropsObject> {
  return computed(() => {
    // Copy of props for safe modification without altering the original object
    const updatedProps = { ...props }

    // Loop over default values and set as fallback if prop not exist
    Object.keys(defaultValues).forEach((key: string) => {
      if (Object.prototype.hasOwnProperty.call(defaultValues, key)) {
        updatedProps[key] = updatedProps[key] || defaultValues[key]
      }
    })

    return updatedProps
  })
}
