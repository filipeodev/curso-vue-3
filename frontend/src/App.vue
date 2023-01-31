<template>
  <span v-if="showName">Mostrar o nome</span>

  <div :class="teste">teste</div>

  <img :src="image" alt="teste" title="teste">
  <ul>
    <template v-for="(user,key) in users" :key="key">
      <li v-if="user.is_admin === 1">
        {{ key }} - {{ user.firstName }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      teste:"class",
      image:'https://picsum.photos/200/300',
      showName:true,
      user:{name:'Alexandre', age:40},
      users:[
        {
          id:1,
          firstName: "Alexandre",
          age:40,
          is_admin:1
        },
        {
          id:2,
          firstName: "Maria",
          age:40,
          is_admin:0
        },
        {
          id:3,
          firstName: "Joao",
          age:40,
          is_admin:0
        },
        {
          id:3,
          firstName: "Pedro",
          age:40,
          is_admin:1
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
