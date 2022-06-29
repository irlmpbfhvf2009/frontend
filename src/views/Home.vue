<template>
  <p>index</p>
  <button @click="toHome">Home</button>
  <button @click="toLogin">Login</button>
  <button @click="toRegister">Register</button>
</template>

<script>
import { useRouter } from 'vue-router'

export default{
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'home'
      })
    })
    const toLogin = (() => {
      router.push({
        name: 'login'
      })
    })
    const toRegister = (() => {
      router.push({
        name: 'register'
      })
    })
    return {
      toHome,
      toLogin,
      toRegister
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
