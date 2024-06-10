import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', () => {
  const loginList = ref([])

  function addValueToLoginList(value: { 
    email: string; 
    password: string;
  })
  {
    const {email, password} = value;
    const updatedLoginList = [...loginList.value, { email, password}];
    loginList.value = updatedLoginList;
  }
  return { addValueToLoginList, loginList}
});
