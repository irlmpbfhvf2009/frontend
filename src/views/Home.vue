<template>
  <div id=nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">註册</router-link>
    <router-link to="/admin">管理員後台</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
  }
}
</script>