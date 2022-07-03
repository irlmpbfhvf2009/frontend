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
                this.axios.post('user/register', this.user)
                    .then(response => {
                        alert(response.data)
                    }).catch((err)=>{
                        alert(err.response.data)
                        })
            }
        }
    }
</script>
