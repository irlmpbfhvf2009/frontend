<template>
    <a-layout-header :style="{ zIndex: 1, width: '100%', position: 'fixed', }">


        <a-menu theme="light" mode="horizontal">
            <!-- <a-menu-item key="1"><router-link to="/square">广场</router-link></a-menu-item>
            <a-menu-item key="2"><router-link to="/follow">动态</router-link></a-menu-item>
            <a-menu-item key="3" ><router-link to="/publish">发帖</router-link></a-menu-item>
            <a-menu-item key="4" ><router-link to="/myBlog">我的帖子</router-link></a-menu-item>
            <a-menu-item key="10" ><router-link to="/circles">兴趣圈</router-link></a-menu-item>
            <a-menu-item key="6"><router-link to="/adminCollect">收藏</router-link></a-menu-item>
            <a-menu-item key="5"><router-link to="/myFriend">关注列表</router-link></a-menu-item>
            <a-menu-item key="11" ><router-link to="/explore">发现</router-link></a-menu-item> -->

            <a-menu-item :style="{ marginLeft: 'auto' }">
                <a-button type="text" @click="popSignIn">登入</a-button>
            </a-menu-item>

            <a-menu-item>
                <a-button type="text" @click="popSignUp">註冊</a-button>
            </a-menu-item>

            <a-modal v-model:visible="signInVisible" title="登入" @ok="handleSignInOk">
                <a-form>
                    <a-form-item label="信箱">
                        <a-input v-model:value="user.email" placeholder="請輸入信箱" />
                    </a-form-item>
                    <a-form-item label="密碼">
                        <a-input type="password" v-model:value="user.password" placeholder="請輸入密碼" />
                    </a-form-item>
                </a-form>
            </a-modal>

            <a-modal v-model:visible="signUpVisible" title="註冊" @ok="handleSignUpOk">
                <a-form>
                    <a-form-item label="信箱">
                        <a-input  v-model:value="signUpUser.email" placeholder="請輸入信箱" />
                    </a-form-item>
                    <a-form-item label="暱稱">
                        <a-input  v-model:value="signUpUser.username" placeholder="請輸入暱稱" />
                    </a-form-item>
                    <a-form-item has-feedback label="密碼">
                        <a-input  v-model:value="signUpUser.password" placeholder="請輸入密碼" type="password" />
                    </a-form-item>
                    <a-form-item has-feedback label="確認密碼">
                        <a-input  v-model:value="signUpUser.checkPassword" placeholder="請再次確認密碼" type="password" autocomplete="off" />
                    </a-form-item>
                </a-form>
            </a-modal>
        </a-menu>

    </a-layout-header>


</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { login } from "@/api/index.js";
import { register } from "@/api/index.js";
export default {
    name: "TheHeader",
    setup() {
        const user = reactive({
            email: "",
            password: "",
        });

        const signUpUser = reactive({
            email: "",
            username: "",
            password: "",
            checkPassword: "",
        });

        const signInVisible = ref(false);
        const signUpVisible = ref(false);

        const popSignIn = () => {
            signInVisible.value = true;
        };

        const popSignUp = () => {
            signUpVisible.value = true;
        };

        const handleSignInOk = () => {
            signIn()
        };
        const handleSignUpOk = () => {
            if(signUpUser.password!=signUpUser.checkPassword){
                alert("兩次密碼不一致")
                return false;
            }
            signUp()
        };

        async function signIn() {
            const res = await login(user);
            console.log(res)
            const token = res.data.body
            if (res.status === 200) {
                alert("登入成功")
                localStorage.setItem("token", token)
                signInVisible.value = false;
                /* state.token = res.data.body */
            } else {
                localStorage.removeItem("token")
                alert(token)
            }
        }

        async function signUp() {
            const res = await register(signUpUser);
            console.log(res)
        }



        
        return {
            user,
            signUpUser,
            popSignIn,
            popSignUp,
            signInVisible,
            signUpVisible,
            handleSignInOk,
            handleSignUpOk,

        }
    }
};




</script>

<style scoped>
.ant-layout-header {
    background: #FFFFFF;
}

.logo {
    float: left;
    width: 100px;
    height: 31px;
    margin: 0px 0px 0px 0;
    background: rgba(255, 255, 255, 0.3);
}
</style>