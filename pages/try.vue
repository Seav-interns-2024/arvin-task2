<script setup lang="ts">
import { ref } from 'vue'
import { useFiltersStore } from '~/store/try'
import { storeToRefs } from 'pinia'

// Initialize input values with refs
const inputVal = {
  inputVal1: ref(''),
  inputVal2: ref('')
}

// Use the store
const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)

// TypeScript type definitions
interface FiltersStore {
  addValueToFilterList(value: { inputVal1: string; inputVal2: string }): void;
  filtersList: string[];
}

</script>

<template>
  <div>
    {{ filtersList }}
    <form>
      <input v-model="inputVal.inputVal1" />
      <input v-model="inputVal.inputVal2" />
      <button @click.prevent="addValueToFilterList(inputVal)">+</button>
    </form>
  </div>
</template>