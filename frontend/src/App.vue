<template>
  <template v-show="showHeader">
    <Header />
  </template>
  
  <!-- <template v-if="showHeader">
    <Header />
  </template>
  <span v-else-if="showElseIf">Nada</span>
  <span v-else>
      Sem Header
  </span> -->
  <!-- <Header v-if="showHeader" /> -->
  <hr>
  <h2>Lista de users</h2>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.firstName }} 
      <button v-if="user.is_admin">Admin</button>
      <button v-else>Not Admin</button>
    </li>
  </ul>
</template>

<script>
import http from '@/services/http.js';
import Header from '@/components/Header.vue';
// import axios from 'axios';

export default {
  components:{Header},
  data(){
    return {
      users:[],
      showHeader:false,
      showElseIf:true
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
