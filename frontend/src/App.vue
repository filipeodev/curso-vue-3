<template>

  {{ count }}

  <button v-on:click="count++">Add</button>

  <h2 id="my-app">App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  
</template>

<script setup>
import {onMounted, onUpdated, ref} from "vue";

const count = ref(0);

onMounted(() => {
  console.log("mounted");
})


onUpdated(() => {
  console.log("updated");
})
</script>

<style scoped>
@import "@/assets/app.css";
</style>
