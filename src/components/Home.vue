<template>
  <div id="list-page">
    <h1>Github</h1>
    <input v-model="username" type="text" style="margin-right: 5px">
    <button @click="getProfile()">Procurar</button>
    <h2>Lista</h2>
    <p style="color: red" v-if="error">Repositório não encontrado</p>
    <ul>
      <router-link class="link" :to="{name: description, params:{name: repo.login}}" v-for="repo of repositorios" :key="repo.id">{{repo.name}}<img class="image_profile" v-bind:src=repo.avatar_url></router-link>
    </ul>
  </div>
</template>

<script>
import api from '../config/api'

export default {
  name: 'List',
  data() {
    return {
      repositorios: [],
      username: '',
      error: false,
      description: "description"
    }
  },
  methods:{
    async getProfile() {
      try {
        const res = await api.get(`/users/${this.username}`)
        console.log(res.data)
        this.repositorios = [...this.repositorios, res.data]
        this.error = false
      } catch (error) {
        this.error = true
      }
    }
  }
}

</script>

<style>
#list-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.image_profile {
  border-radius: 50%;
  height: 56px;
  width: 56px;
  margin-left: 5px;
}

.link{
  text-decoration: none;
  color: black;
}

/* :hover{
  transform: translateX(2%);
  transition: all .6s;
} */


</style>
