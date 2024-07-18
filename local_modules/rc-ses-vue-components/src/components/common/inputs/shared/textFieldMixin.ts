import { computed } from 'vue'

export default function useTextFieldMixin(
  props: { modelValue?: string; value?: string },
  emit: (event: any, value: string) => void,
) {
  const inputValue = computed(() => props.modelValue ?? props.value ?? '')

  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    const newValue = target.value
    emit('update:modelValue', newValue)
  }

  const onInput = (event: Event) => {
    updateValue(event)
    const target = event.target as HTMLInputElement
    const newValue = target.value
    emit('input', newValue)
  }

  return {
    inputValue,
    updateValue,
    onInput,
  }
}
