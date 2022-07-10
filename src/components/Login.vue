<template>
    <form class="login">
        <h1>會員登入</h1><br>
        <input type="email" v-model="signIn.email" class="form-control" placeholder="帳號:abcd@email.com" /><br>
        <input type="password" v-model="signIn.password" class="form-control" placeholder="密碼" autocomplete="on" /><br>
        <div class="forgetPassword">
            <a>忘記密碼?</a>
        </div><br>
        <div>還不是會員？請先<a class="reg" @click="registerForm">註冊</a></div>
        <button type="button" class="btn btn-secondary" @click="submitLogin">登入</button>

    </form>

    <form class="register">
        <h1>會員註冊</h1><br>
        <select v-model="signUp.gender" class="form-select" aria-label="Default select example">
            <option value="0" selected> -- 請選擇您的性別 --</option>
            <option value="boy">我是有錢的女生</option>
            <option value="girl">我是男生</option>
        </select><br>
        <div style="color:white">
            生日(未開發)
            <select style="width: 20%; display:inline" class="form-select" aria-label="Default select example">
                <option selected>年</option>
            </select>
            <select style="width: 20%; display:inline" class="form-select" aria-label="Default select example">
                <option selected>月</option>
            </select>
            <select style="width: 20%;display:inline" class="form-select" aria-label="Default select example">
                <option selected>日</option>
            </select>
        </div>
        <br>

        <input type="text" v-model="signUp.username" class="form-control" placeholder="請輸入暱稱(註冊後不可更改)" /><br>
        <input type="email" v-model="signUp.email" class="form-control" placeholder="請輸入電子郵件" /><br>
        <input type="password" v-model="signUp.password" class="form-control" placeholder="請輸入密碼"
            autocomplete="on" /><br>
        <input type="password" v-model="signUp.checkPassword" class="form-control" placeholder="請確認密碼"
            autocomplete="on" /><br>
        <div style="color:azure">本站可能有部分成人內容，註冊即表示您成年並且已閱讀並同意隱私權政策與服務條款</div>
        <div style="color:azure">已經是會員了？請<a class="reg" @click="loginForm">點擊登入</a></div>
        <button type="button" class="btn btn-danger" @click="submitRegister">使用信箱註冊</button>
    </form>
</template>


<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { login, register, memberInfo } from "@/api/index.js";
import store from '@/store'
import { useRouter } from "vue-router";
export default ({
    setup() {
        const signIn = reactive({
            email: '',
            password: '',
            token: '',
        })
        const signUp = reactive({
            email: '',
            username: '',
            password: '',
            checkPassword: '',
            gender: '0',
            age: '',
            token: '',
        })
        const router = useRouter();
        const init = () => {
            $('.register').css('display', 'none')
        }
        const loginForm = () => {
            $('.login').css('display', 'block');
            $('.register').css('display', 'none');
        }
        const registerForm = () => {
            $('.login').css('display', 'none');
            $('.register').css('display', 'block');
        }
        async function submitLogin() {
            const res = await login(signIn);
            const result = res.data.body
            const state = res.data.statusCode
            if (state == "OK") {
                alert("登入成功")
                signIn.token = result;
                const res = await memberInfo(signIn);
                store.commit("setUser", res.data.body);
                router.push({
                    name: 'Home',
                    params: {
                        /* friendId: friendId,
                        friendName: friendName, */
                    }
                })
            } else {
                alert(result)
            }
        }

        async function submitRegister() {
            if (signUp.password != signUp.checkPassword) {
                alert('兩次密碼輸入不一致')
                signUp.password = '';
                signUp.checkPassword = '';
                return false;
            }
            const res = await register(signUp);
            const result = res.data.body
            if (result == "註冊成功") {
                const res = await login(signUp);
                const result = res.data.body
                const state = res.data.statusCode
                if (state == "OK") {
                    signUp.token = result
                    const res = await memberInfo(signUp);
                    store.commit("setUser", res.data.body)
                    router.push({
                        name: 'Home',
                        params: {
                            /* friendId: friendId,
                            friendName: friendName, */
                        }
                    })
                } else {
                    alert(result)
                }
            } else {
                alert(result)
            }
        }
        onMounted(() => {
            init();
        })
        return {
            signIn,
            signUp,
            loginForm,
            registerForm,
            submitLogin,
            submitRegister,
        }
    }
})
</script>

<style>
.login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: "微軟正黑體", sans-serif;
    border-radius: 10px;
    padding: 30px;
    width: 30%;
}

.register {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: "微軟正黑體", sans-serif;
    border-radius: 10px;
    padding: 30px;
    width: 30%;
}

.forgetPassword {
    text-align: left;
    color: rgb(255, 148, 109);
}

.reg {
    color: rgb(227, 133, 182);
}
</style>