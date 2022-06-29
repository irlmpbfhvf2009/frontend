<template>
    <router-view/>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue' */
export default {
  /* name: 'App', */
  components: { 
    /* HelloWorld,Login,Register */
  }
}
</script>

<style type="text/css">
    body {
        margin: 0;
        padding: 0;
        background: #487eb0;
    }

    div {
        width: 300px;
        padding: 20px;
        text-align: center;
        margin: 0px auto; /*水平居中*/
        top: 100%;
        left: 100%;
    }

    h1 {
        margin-top: 100px;
        color: #ffffff;
        font-size: 40px;
    }

    input {
        display: block;
        width: 100%;
        padding: 0 16px;
        height: 44px;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: "montserrat", sans-serif;
        margin: 4px;
        background: rgba(255, 255, 255, 5);
        border-radius: 6px;
    }

    button {
        width: 120px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
        background: #920eff;
        color: #fff;
        border-radius: 44px;
        cursor: pointer;
        transition: 0.8s;
    }
</style>
