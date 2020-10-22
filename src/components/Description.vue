<template>
  <div id="list-page">
    <img class="image_profile" v-bind:src=person.avatar_url>
    <h2>{{person.name}}</h2>
    <h4>{{person.bio}}</h4>
    <h5>Location: {{person.location}}</h5><h5>User: {{person.login}}</h5>
  </div>
</template>

<script>
import api from '../config/api'


export default {
  name: 'Description',
  data() {
    return {
      person: {}
    }
  },
  async created() {
    const res = await api.get(`/users/${this.$route.params.name}`)
    console.log(res.data)
    this.person = res.data;
  },
  methods:{},
}

</script>

<style scoped>
#description-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.image_profile {
  border-radius: 50%;
  height: 156px;
  width: 156px;
  margin-left: 5px;
}

.link {
  text-decoration: none;
  color: black;
  transition: all .5s;
}

</style>
