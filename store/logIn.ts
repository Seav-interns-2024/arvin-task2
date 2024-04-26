import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    formData: {
      email: '',
      password: '',
    },
  }),
  actions: {
    login(credentials: { email: string; password: string }) {
      // Simulate login logic (replace with your actual logic)
      this.formData = credentials; // Store form data
      console.log('Form data stored:', this.formData);
      return true; // Simulate successful login (for redirection)
    },
  },
});
