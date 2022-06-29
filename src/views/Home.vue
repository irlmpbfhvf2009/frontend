<template>
  <div>
    <ul>
      <li><router-like to="/">Home</router-like></li>
      <li><router-like to="/login">Login</router-like></li>
      <li><router-like to="/register">Register</router-like></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
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
