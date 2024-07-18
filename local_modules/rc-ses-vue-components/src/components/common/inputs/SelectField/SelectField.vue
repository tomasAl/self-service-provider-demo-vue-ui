<template>
  <FieldWrapper
    :label="fieldLabel"
    :description="fieldDescription"
    :tooltip="fieldTooltip"
    :for="name"
  >
    <v-select
      ref="selectRef"
      v-model="model"
      v-bind="$attrs"
      :name="name"
      class="rc-field rc-select-field"
      variant="outlined"
      :placeholder="placeholder"
      :items="computedItems"
      :hide-details="!error"
      :error="!!error"
      :error-messages="error"
      :menu-props="menuProps"
      :readonly="readonly"
      :disabled="disabled"
      transition="scroll-y-transition"
      :multiple="multiple"
      @update:menu="updateVList"
      @update:focused="() => (searchValue = '')"
    >
      <template v-if="searchable" #prepend-item>
        <SearchableArea
          v-model="searchValue"
          :multiple="multiple"
          @update-check-all="checkAll"
        />
      </template>

      <template #item="{ item, props }">
        <v-list-item
          v-bind="props"
          class="rc-menu-list-item"
          :subtitle="item.raw.subtitle"
          :append-icon="model === item.value ? '$checkPrimary' : undefined"
        >
          <template #prepend>
            <v-checkbox
              v-if="multiple"
              base-color="white"
              color="primary"
              :model-value="model?.includes(<never>item.value)"
              hide-details
            ></v-checkbox>
          </template>
        </v-list-item>
      </template>
    </v-select>
  </FieldWrapper>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { watch } from 'vue'

import SearchableArea from '@/components/common/inputs/shared/SearchableArea/SearchableArea.vue'
import type {
  SelectFieldItemType,
  SelectFieldProps,
} from '@/types/inputs/SelectFieldProps'

import './SelectFieldStyle.scss'

defineOptions({
  inheritAttrs: false,
})

const selectProps = withDefaults(defineProps<SelectFieldProps>(), {
  disabled: false,
  placeholder: undefined,
  error: undefined,
  name: undefined,
  searchable: false,
  multiple: false,
  items: () => [],
})

const model = defineModel<any[] | null | undefined>()

const selectRef = ref()
const searchValue = ref<string>()

const menuId = uuidv4()
const menuProps = ref({
  id: menuId,
  offset: 6,
  class: { 'rc-searchable-menu': selectProps.searchable },
})

const getItemValueForSearch = (item: SelectFieldItemType): string => {
  return `${item.title} ${item?.subtitle}`
}

const getItemValue = (item: SelectFieldItemType): string => {
  if (typeof item.value === 'string') {
    return item.value
  }

  return item.value.toString()
}

const computedItems = computed(() => {
  if (!searchValue.value) {
    return selectProps.items
  }

  return selectProps.items.filter((item: SelectFieldItemType) =>
    searchValue.value ? getItemValueForSearch(item).includes(searchValue.value) : false,
  )
})

const updateVList = () => {
  // nextTick() - not always works, especially when searchValue becomes empty
  setTimeout(() => {
    const menu = document.getElementById(menuId)

    if (!menu) {
      return
    }

    const list = menu.querySelector('.v-list')

    if (!list) {
      return
    }

    if (list.scrollHeight > list.clientHeight) {
      list.classList.add('rc-scrollable')
    } else {
      list.classList.remove('rc-scrollable')
    }
  }, 200)
}

watch(computedItems, () => {
  updateVList()
})

const checkAll = (value: boolean) => {
  model.value = value
    ? computedItems.value.map((item: SelectFieldItemType) => getItemValue(item))
    : []
}
</script>
