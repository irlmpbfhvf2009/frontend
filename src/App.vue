<template>
  <div id=nav>
    <router-like to="/">Home</router-like>
    <router-like to="/login">Login</router-like>
    <router-like to="/register">Register</router-like>
  </div>
  <router-view />
    <router-view/>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue' */
export default {
  name: 'App',
  components: { 
    /* HelloWorld,Login,Register */
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /*  margin-top: 60px; */
}
</style>
