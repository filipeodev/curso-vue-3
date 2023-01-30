<template>

  <div>
    {{ count }}
    {{ userName }}
  </div>

  <div>
    <ul>
      <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
    </ul>
  </div>

  <div>
    <button v-on:click="count++">Add</button>
  </div>

  <div>
    <h2 id="my-app">App</h2>
  </div>

  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  
</template>

<script setup>
import {onMounted, onUpdated, ref, reactive} from "vue";

const count = ref(0);
const userName = ref('Filipe');

const users = ref([
  {
    firstName: "Filipe",
    age: 24
  },
  
  {
    firstName: "Teste",
    age: 25
  }
])

let myName = ref('Alexandre')
onMounted(() => {
  console.log(users);
})


onUpdated(() => {
  console.log("updated");
})
</script>

<style scoped>
@import "@/assets/app.css";
</style>
