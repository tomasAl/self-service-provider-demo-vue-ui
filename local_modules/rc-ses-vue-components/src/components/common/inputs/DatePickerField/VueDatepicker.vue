<template>
  <DatePicker
    ref="datepickerRef"
    v-model="date"
    :enable-time-picker="false"
    :week-start="1"
    :month-change-on-scroll="true"
    locale="lt"
    month-name-format="long"
    :range="isRange"
    :multi-calendars="isRange ? 2 : 0"
    :format="formatPreview"
    :placeholder="isRange ? 'Select date range' : 'Select date'"
    :auto-apply="false"
    :close-on-auto-apply="false"
    :teleport="false"
    :min-range="1"
    :hide-input-icon="false"
    menu-class-name="rc-datepicker-menu"
    input-class-name="rc-datepicker-input"
    class="rc-datepicker"
  >
    <template #dp-input="inputBind">
      <TextField v-bind="inputBind" prepend-inner-icon="$calendar" />
    </template>

    <template #clear-icon="{ clear }">
      <XCircleFilledIcon @click="clear" />
    </template>

    <template #arrow-left>
      <v-icon icon="$prev"></v-icon>
    </template>

    <template #arrow-right>
      <v-icon icon="$next" />
    </template>

    <template #action-preview>
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getThisWeek"
        >Ši savaitė</v-btn
      >
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getThisMonth"
        >Šis mėnuo</v-btn
      >
      <v-btn variant="text" color="primary" class="text-subtitle-1" @click="getLastMonth"
        >Praėjęs mėnuo</v-btn
      >
    </template>

    <template #calendar-icon>
      <v-icon icon="$calendar" />
    </template>

    <template #action-buttons>
      <v-btn
        variant="text"
        color="primary"
        class="text-subtitle-1"
        @click="closeDatepicker"
      >
        Uždaryti
      </v-btn>
      <v-btn color="primary" @click="selectDate">Gerai</v-btn>
    </template>
  </DatePicker>
</template>

<script setup lang="ts">
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

import XCircleFilledIcon from '@/assets/icons/filled/XCircleFilledIcon.vue'

import './VueDatepickerStyle.scss'

defineProps({
  isRange: {
    type: Boolean,
    default: false,
  },
})

const datepickerRef = ref<any>(null)
const date = ref<any>(null)

const formatSingleDate = (dt: Date): string => {
  return dt.toISOString().split('T')[0] // YYYY-MM-DD
}

const formatDateRange = (startDate: Date, endDate: Date): any => {
  const start = formatSingleDate(startDate)
  const end = formatSingleDate(endDate)
  return `${start}  →  ${end}`
}

const formatPreview = (
  dt: string | ((date: Date) => string) | ((dates: Date[]) => string),
): string => {
  if (Array.isArray(dt) && dt.length === 2) {
    // Date range function
    return formatDateRange(dt[0], dt[1])
  }
  if (typeof dt === 'object') {
    // Single date
    return formatSingleDate(new Date(dt))
  }
  return 'Invalid date format'
}

const selectDate = () => {
  if (datepickerRef.value) {
    datepickerRef.value.selectDate()
  }
}

const closeDatepicker = () => {
  if (datepickerRef.value) {
    datepickerRef.value.closeMenu()
  }
}

const getThisWeek = () => {
  const today = new Date()
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7))
  if (date.value) {
    date.value = [firstDay, lastDay]
  }
}

const getThisMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  if (date.value) {
    date.value = [firstDay, lastDay]
  }
}

const getLastMonth = () => {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0)
  if (date.value) {
    date.value = [firstDay, lastDay]
  }
}
</script>
