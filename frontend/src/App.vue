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

<script setup> //setup é para composition api

// composition api -> novidade do vue 3 ==--------------------------------------
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {ref} from 'vue';
// export default { //posso comentar se tiver setup na tag script
  // components:{Header,Footer}, //posso comentar se tiver setup na tag script
  // setup(){ //posso comentar se tiver setup na tag script
    //para ter reatividade (dados reativos) usa-se ref ou reactive (ref para dados primitivos)
    const count = ref(0);

    function add(){
      count.value++;
    }

    // return { //posso comentar se tiver setup na tag script
    //   count, add
    // }
  // } //posso comentar se tiver setup na tag script
// } //posso comentar se tiver setup na tag script


</script>

<style scoped>
@import "@/assets/app.css";
</style>
