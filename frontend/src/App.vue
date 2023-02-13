<template>
  <img :src="imageSrc" alt="Imagem" class="my-default-class" :class="{'my-class':is_admin,'my-other-class':!is_admin}">
  
  <button @click="count++">Click aqui {{ count }}</button>
  <hr>
  {{ userName }}
  <hr>
  <!-- <input type="text" @keyup="add" placeholder="Qualquer coisa"> -->
  <!-- <input type="text" @keyup="(event) => {this.count += Number(event.target.value)}" placeholder="Qualquer coisa"> -->
  <!-- <input type="text" @keyup="myName" placeholder="Qualquer coisa"> -->
  <input type="text" v-model="userName" placeholder="Qualquer coisa">

  <!-- <template v-show="showHeader">
    <Header />
  </template> -->
  
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
      showElseIf:true,
      count:0,
      userName: "",
      imageSrc:'https://picsum.photos/200/300',
      is_admin:false
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
  },

  methods: {
    add(event) {
      this.count += Number(event.target.value);
      console.log(event.target.value);
      event.target.value = "";
    },
    myName(event){
      this.userName = event.target.value;
    }
  }
}
</script>

<style scoped>
.my-class {
  border: solid 3px red;
}

.my-other-class {
  border: solid 3px blue;
}
</style>
