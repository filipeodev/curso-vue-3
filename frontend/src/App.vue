<template>

  <img :src="imageSrc" alt="imagem" class="my-default-class" :class="{'my-class':is_admin, 'my-other-class':!is_admin}">
  <button @click="add(teste)">Click aqui {{ count }}</button>  <!-- isso foi inserirdo -->
  <hr>

  <h2>Lista de users</h2>

  <ul>
    <li v-for="user in users.users" :key="user.id">{{ user.firstName }}</li> 
  </ul>
  
</template>

<script setup>
import http from '@/services/http.js';
import {onMounted, reactive, ref} from "vue";

let users = reactive({users:[]});
const  imageSrc = ref('https://picsum.photos/200/300');
const is_admin = ref(false);
const count = ref(0); //isso foi inserirdo

function add(teste) {//isso foi inserirdo
  count.value++;
  console.log(teste);
}

onMounted(async () => {
  try {
    const {data} = await http.get('/api/users');
    users.users = data;
  }catch(error){
    console.log(error)
  }
});
</script>

<style scoped>
@import "@/assets/app.css";

.my-class {
  border: 3px solid red;
}

.my-other-class {
  border: 3px solid blue;
}
</style>
