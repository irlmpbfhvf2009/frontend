<template>
    <div>
        <form v-on:submit.prevent="register()">
            <h1>註冊</h1>
            <input type="text" v-model="user.username" placeholder="請輸入用户名" >
            <input type="text" v-model="user.email" placeholder="請輸入信箱">
            <input type="password" v-model="user.password" placeholder="請輸入8位密碼">
            <button>確認</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                user: {
                    username: '', 
                    password: '',
                    email:''
                    },
            }
        },
        methods: {
            register() {
                if(window.location.href=='http://localhost:9090/register'){
                    url='http://localhost:9090/user/register'
                }else{
                    url='user/register'
                }
                this.axios.post(url, this.user)
                    .then(response => {
                        alert(response.data.body)
                    }).catch((err)=>{
                        alert(err.data.body)
                        })
            }
        }
    }
</script>