<script setup lang="ts">
import { ref } from 'vue'
import { useSignupStore } from '~/store/signUp'
import { storeToRefs } from 'pinia'

const formSignup = ref({
    firstName: ref (''),
    middleNameName: ref (''),
    lastName: ref (''),
    suff: ref (''),
    contactNum: ref (''),
    bday: ref (''),
    age: ref (''),
    gender: ref (''),
    email: ref(''), 
    password: ref(''),
    terms: ref ('')
});

const signupStore = useSignupStore ()
const { addValueToFilterList} = signupStore
const { filtersList } = storeToRefs(signupStore)

interface FiltersStore {
  addValueToFilterList(value: { 
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

}): void;
  filtersList: string[];
}

</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center h-screen">
        <div class="w-full md:w-1/3 flex justify-center">
            <img src="/assets/images/alabasta.png" class="h-13 w-auto" alt="Main Logo">
        </div>
        <div class="w-full md:w-2/3 flex justify-center" id="component">
            <form>
                <div class="w-full md:w-3/4 lg:w-11/12 bg-gray-200 p-4 rounded-lg">
                    <div class="flex flex-wrap justify-between">
                        <div class="flex-1 mb-4 mr-4">
                            <label>FIRST NAME</label>
                            <input type="text" v-model="formSignup.firstName" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4 mr-4">
                            <label>MIDDLE NAME</label>
                            <input type="text" v-model="formSignup.middleName"
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4 mr-4">
                            <label>LAST NAME</label>
                            <input type="text" v-model="formSignup.lastName" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4">
                            <label>SUFFIX</label>
                            <select v-model="formSignup.suff" class="block border rounded-md w-full px-2 py-1 mb-2">
                                <option value=" "> </option>
                                <option value="Jr.">JR</option>
                                <option value="Sr.">SR</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-between">
                        <div class="flex-1 mb-4 mr-4">
                            <label>CONTACT NUMBER</label>
                            <input type="text" v-model="formSignup.contactNum" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4 mr-4">
                            <label>DATE OF BIRTH</label>
                            <input type="date" v-model="formSignup.bday" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4 mr-4">
                            <label>AGE</label>
                            <input type="text" v-model="formSignup.age" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4">
                            <label>GENDER</label>
                            <select v-model="formSignup.gender" class="block border rounded-md w-full px-2 py-1 mb-2">
                                <option value=" "> </option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="LGBTQ+">LGBTQ+</option>
                                <option value="N/A">Prefer not to say</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-between">
                        <div class="flex-1 mb-4 mr-4">
                            <label>Email</label>
                            <input type="email" v-model="formSignup.email" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                        <div class="flex-1 mb-4">
                            <label>Password</label>
                            <input type="password" v-model="formSignup.password" required
                                class="block border rounded-md w-full px-2 py-1 mb-2">
                        </div>
                    </div>
                    <div class="flex items-center mb-12">
                        <input type="checkbox" v-model="formSignup.terms" required class="mr-2">
                        <label>Data Privacy Consent</label>
                    </div>
                    <div class="flex justify-center mb-4 ">
                        <button @click.prevent="addValueToFilterList(formSignup)" class="block border border-yellow-600 text-yellow-600 rounded-md w-1/2 px-2 py-1 
                    hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-colors">SIGN UP</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
    .flex-col {
        flex-direction: column;
    }

    .w-full {
        width: 100%;
    }
}
</style>