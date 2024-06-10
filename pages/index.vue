<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from '~/store/logIn'
import { storeToRefs } from 'pinia'

const formLogin = ref({
  email: '',
  password: ''
})

const loginStore = useLoginStore()
const { addValueToLoginList } = loginStore
const { filtersList } = storeToRefs(loginStore)
const router = useRouter()

interface FiltersStore {
  addValueToLoginList(value: { 
    email: string; 
    password: string;
  }): void;
  filtersList: string[];
}

const handleLogin = () => {
  addValueToLoginList(formLogin.value)
  router.push({ name: 'tasks' })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full md:w-1/2 flex justify-center">
      <img src="/assets/images/thousandSunny.png" class="h-13 w-auto" alt="Main Logo">
    </div>
    <div class="w-full md:w-1/2 flex justify-center" id="component">
      <div class="login-container bg-gray-200 p-4 md:p-8 rounded-lg">
        <form @submit.prevent="handleLogin">
          <label class="text-sm md:text-base">Email</label>
          <input type="email" v-model="formLogin.email" required class="block border rounded-md w-full px-2 py-1 mb-2 text-sm md:text-base">
          <label class="text-sm md:text-base">Password</label>
          <input type="password" v-model="formLogin.password" required class="block border rounded-md w-full px-2 py-1 mb-2 text-sm md:text-base">
          <div class="flex justify-between">
            <button type="button" @click="sendOtp" class="text-sm md:text-base text-yellow-600">Send OTP</button>
            <button type="button" @click="forgotPassword" class="text-sm md:text-base text-yellow-600">Forgot Password</button>
          </div>
          <div class="flex justify-center items-center mt-4">
            <button type="submit" class="block border border-yellow-600 rounded-md w-full px-2 py-1 mb-2 text-yellow-600 text-sm md:text-base hover:bg-yellow-600 hover:text-white transition-colors">
              LOG IN
            </button>
          </div>
          <div class="flex justify-between">
            <label class="text-sm md:text-base">Don't have an account yet?</label>
            <NuxtLink to="signup" class="text-sm md:text-base text-yellow-600">Sign Up</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .w-full {
    width: 100%;
  }

  .login-container {
    padding: 40px;
  }
}

.login-container {
  width: 90%;
  max-width: 500px;
  height: auto;
  padding: 20px;
}
</style>
