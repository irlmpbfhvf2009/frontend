<template>
    <div>
        <h1>登入</h1>
        <input type="text" v-model="user.email" placeholder="請輸入信箱">
        <input type="password" v-model="user.password" placeholder="請輸入8位密碼">
        <button v-on:click="login">登入</button>&nbsp;&nbsp;
        <router-link to="/register"><button>註冊</button></router-link>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
    export default {
        /* name: "Login", */
        data() {
            return {
                user: {
                    email: '', 
                    password: ''
                    }
            }
        },
        methods: {
            login() {
                if(window.location.href=='http://localhost:9090/login'){
                    url='http://localhost:9090/user/login'
                }else{
                    url='user/login'
                }
                this.axios.post(url,this.user)
                .then(response => {
                    alert(response.data.body)
                }).catch((err)=>{
                    alert(err.response.data.body)
                    })
            },
        }
    }
</script>



