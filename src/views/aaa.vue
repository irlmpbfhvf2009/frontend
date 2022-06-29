<template>
  <p>需要被認證的網頁</p>
  <router-link to="/home"><button>Home</button></router-link>
  <router-link to="/login"><button>Login</button></router-link>
  <router-link to="/register"><button>Register</button></router-link>
  <router-link to="/aaa"><button>需要被驗鎮的網頁</button></router-link>
</template>

<script>

export default{
  setup () {
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
