<template>
    <div>
        <form v-on:submit.prevent="register()">
            <h1>註冊</h1>
            <input type="text" class="123" v-model="user.username" placeholder="請輸入用户名" >
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
                user: {username: '', password: '',email:''},
            }
        },
        methods: {
            register() {
                this.axios.post('api/register', this.user)
                    .then(response => {
                        alert(response.data)
                    }).catch((err)=>{
                        alert(err.response.data)
                        })
            }
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
