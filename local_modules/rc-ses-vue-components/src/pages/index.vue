<template>
  <HeaderPanel
    drop-shadow
    :breadcrumbs="['Pradžia', 'Pavyzdžiai']"
    title="Formų bei komponentų pavyzdžiai"
    description="Formos ir komponentai yra esminės bet kokios vartotojo sąsajos dalys, kurios padeda kurti sąveiką tarp vartotojo ir programos. Formos yra struktūrizuoti laukai, skirti duomenų įvedimui, pavyzdžiui, prisijungimo vardai, slaptažodžiai ar atsiliepimai. Jos gali būti paprastos, su keletu teksto laukų, arba sudėtingos, apimantys įvairias parinktis, tokias kaip išskleidžiami sąrašai ar radijo mygtukai. Komponentai yra pakartotinai naudojami UI elementai, tokie kaip mygtukai, etiketės, perjungikliai ir slankikliai, kurie padeda standartizuoti ir optimizuoti vartotojo sąsajos kūrimą. Kartu šie elementai formuoja naudotojui draugiškas sąsajas, leidžiančias efektyviai ir patogiai bendrauti su programinės įrangos funkcijomis."
  >
  </HeaderPanel>
  <v-container>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.value"
        append-icon="$next"
        @click="router.push(item.routeTo)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import HeaderPanel from '@/components/common/panels/HeaderPanel/HeaderPanel.vue'

const router = useRouter()

const items = ref([
  {
    title: 'Vienos formos pavyzdys',
    value: 1,
    routeTo: '/singleForm',
  },
  {
    title: 'Kelių formų pavyzdys',
    value: 2,
    routeTo: '/multiForm',
  },
  {
    title: 'Skirtuko tipo formos pavyzdys',
    value: 3,
    routeTo: '/tabForm',
  },
])
</script>
