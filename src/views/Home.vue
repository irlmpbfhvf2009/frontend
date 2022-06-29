<template>
  <p>index</p>
  <button @click="toHome">toHome</button>
  <button @click="toLogin">toLogin</button>
  <button @click="toRegister">toRegister</button>
</template>

<script>
import { useRouter } from 'vue-router'

export default{
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'Home'
      })
    })
    const toLogin = (() => {
      router.push({
        name: 'Login'
      })
    })
    const toRegister = (() => {
      router.push({
        name: 'Register'
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
