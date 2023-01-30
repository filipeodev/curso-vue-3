<template>

  <ul>
    <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
  </ul>

  <div v-if="showHeader">
    <Header />
  </div>
  <br>

  <button v-on:click="showHeader = !showHeader">Toogle Header</button>
  <br>
  <br>

  <h2>App</h2>
  <br>
  <br>
  
  <router-link to="/">Home</router-link>
  <router-link to="/about">Avout</router-link>

  <router-view></router-view>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {Header},
  data(){
    return{
      count:0,
      showHeader:false,
      userName:"Filipe",
      users:[
        {
          firstName:"Filipe",
          age: 24
        },
        {
          firstName:"Teste",
          age: 24
        }
      ]
    }
  },
  mounted(){
    console.log(this.count);
  },
  updated(){
    console.log('updated');
  }
}
</script>