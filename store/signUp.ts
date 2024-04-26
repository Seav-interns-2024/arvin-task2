import { defineStore } from 'pinia'

export const useSignupStore = defineStore('SignupStore', () => {
  const filtersList = ref([])

  function addValueToFilterList(value: { 
    firstName: string; 
    middleName: string;
    lastName: string;
    suff: string;
    contactNum: string;
    bday: string;
    age: string;
    gender: string;
    email: string;
    password: string;
    terms: boolean;
  }) 
  {
    const { firstName, middleName, lastName, suff, contactNum, bday, age, gender, email, password, terms} = value;
    const updatedFiltersList = [...filtersList.value, { firstName, middleName, lastName, suff, contactNum, bday, age, gender, email, password, terms }];
    filtersList.value = updatedFiltersList;
  }

  return { addValueToFilterList, filtersList }
})