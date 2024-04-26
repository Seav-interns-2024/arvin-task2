import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filtersStore', () => {
  const filtersList = ref(['youtube', 'twitch'])

  function addValueToFilterList(value: { inputVal1: string; inputVal2: string }) {
    const { inputVal1, inputVal2 } = value;
    const updatedFiltersList = [...filtersList.value, { inputVal1, inputVal2 }];
    filtersList.value = updatedFiltersList;
  }

  return { addValueToFilterList, filtersList }
})