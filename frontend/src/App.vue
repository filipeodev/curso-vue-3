<template>
  <Header />

  <br/>
  
  <!-- <button v-on:click="add()">Add {{ count }}</button> -->
  <button v-on:click="add">Add {{ count }}</button>

  <br/>

  <h2 id="my-app">App</h2>

  <br/>

  <Footer />
  
</template>

<script>
// options api -> versão 2 do vue

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{Header,Footer},
    // tudo  ue está dentro do data é reativo (chamado reatividade)
  data() {
    return {
      count:0
    }
  },
  methods: {
    add(){
      this.count++
    }
  }
}
</script>

<style scoped>
@import "@/assets/app.css";
</style>
