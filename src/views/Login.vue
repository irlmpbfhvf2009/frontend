<template>
    <div>
        <h1>登入</h1>
        <input type="text" v-model="user.email" placeholder="請輸入信箱">
        <input type="password" v-model="user.password" placeholder="請輸入8位密碼">
        <button v-on:click="login">登入</button>&nbsp;&nbsp;
        <button v-on:click="register">註冊</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
    }
</script>



