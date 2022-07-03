<template>
  <div id=nav>
    <router-link to="/">Home</router-link> <br>
    <router-link to="/login">Login</router-link><br>
    <router-link to="/register">註册</router-link><br>
    <router-link to="/admin">管理員後台</router-link><br>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
  }
}
</script>