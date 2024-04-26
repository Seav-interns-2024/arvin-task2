import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  const taskList = ref([
    { title: 'Task 1', desc: 'Description for Task 1', date: '', time: '' },
  { title: 'Task 2', desc: 'Description for Task 2', date: '', time: '' },
  
  ])

  function addValueToTasksList(value: { 
    title: string; 
    desc: string,
    date: string,
    time: string }) {
    const { title, desc, date, time } = value;
    const updatedTasksList = [...taskList.value, { title, desc, date, time }];
    taskList.value = updatedTasksList;
  }

  return { addValueToTasksList, taskList }
})