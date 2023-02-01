<template>
  <h2>Lista de users</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
</template>

<script>
import http from '@/services/http.js';
// import axios from 'axios';

export default {
  data(){
    return {
      users:[]
    }
  },

  async mounted() {
    try {
      const {data} = await http.get('/api/users');
      this.users = data;
    }catch(error){
      console.log(error);
    }
  },

  updated() {
    console.log('updated');
  }
}
</script>

<style scoped>
</style>
