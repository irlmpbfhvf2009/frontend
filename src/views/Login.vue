<template>
    <div>
        <h1>登入</h1>
        <input type="text" placeholder="請輸入信箱" v-model="user.email" @keyup.enter="submitLogin">
        <input type="password" v-model="user.password" placeholder="請輸入8位密碼" @keyup.enter="submitLogin">
        <button @click="submitLogin">登入</button>&nbsp;&nbsp;
        <router-link to="/register">註冊</router-link>
            <router-link to="/admin">管理員後台</router-link>
    </div>
</template>

<script>
import { computed, inject, onMounted, reactive, ref } from "@vue/runtime-core";
import { login } from "@/api/index.js";

export default {
    name: "Login",
    setup() {
        onMounted(() => {
            localStorage.removeItem("token");
        });
        /* const  state  = inject("global"); */
        const user = reactive({
            email: "156666@asafd.com",
            password: "15q6wqfw",
        });
        async function submitLogin() {
            const res = await login(user);
            console.log(res)
            const token = res.data.body
            if (res.status === 200) {
                alert("登入成功")
                localStorage.setItem("token",token)
                /* state.token = res.data.body */
            }else{
                alert(token)
            }
        }
            return {
                submitLogin,
                user
            };
    }
}
</script>



