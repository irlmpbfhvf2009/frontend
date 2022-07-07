<template>
    <a-layout-header :style="{ zIndex: 1, width: '100%', position: 'fixed', }">
        <div>
            <router-link to="/">
                <img class="icon" src="../assets/a.png">
            </router-link>
        </div>

        <a-menu theme="light" mode="horizontal">
            <a-menu-item key="1" >
                <router-link to="/square">廣場</router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/square">聊天室</router-link>
            </a-menu-item>
            <a-menu-item key="3" v-if="!!user.id">
                <router-link to="/square">我的帖子</router-link>
            </a-menu-item>
            <a-menu-item key="4" v-if="!!user.id">
                <router-link to="/square">關注列表</router-link>
            </a-menu-item>
            <a-menu-item key="5" v-if="!user.id" :style="{ marginLeft: 'auto' }">
                <a-button type="text" @click="popSignIn">登入</a-button>
            </a-menu-item>
            <a-menu-item key="6" v-if="!user.id">
                <a-button type="text" @click="popSignUp">註冊</a-button>
            </a-menu-item>
            <a-menu-item key="9" v-if="!!user.id" :style="{ marginLeft: 'auto' }">

                <a-button type="text">
                    <a-dropdown>
                        <a class="ant-dropdown-link">
                            <a-avatar alt="Han Solo" />
                            {{ user.username }}
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <router-link to="/">
                                        <a-button type="text">個人中心</a-button>
                                    </router-link>
                                </a-menu-item>
                                <a-menu-item>
                                    <a-button type="text" @click="logout">退出登入</a-button>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </a-button>
            </a-menu-item>



            <a-modal v-model:visible="signInVisible" title="登入" @ok="handleSignInOk">
                <a-form>
                    <a-form-item label="信箱">
                        <a-input v-model:value="signInUser.email" placeholder="請輸入信箱" />
                    </a-form-item>
                    <a-form-item label="密碼">
                        <a-input type="password" v-model:value="signInUser.password" placeholder="請輸入密碼" />
                    </a-form-item>
                </a-form>
            </a-modal>

            <a-modal v-model:visible="signUpVisible" title="註冊" @ok="handleSignUpOk">
                <a-form>
                    <a-form-item label="信箱">
                        <a-input v-model:value="signUpUser.email" placeholder="請輸入信箱" />
                    </a-form-item>
                    <a-form-item label="暱稱">
                        <a-input v-model:value="signUpUser.username" placeholder="請輸入暱稱" />
                    </a-form-item>

                    <a-form-item has-feedback label="密碼">
                        <a-input v-model:value="signUpUser.password" placeholder="請輸入密碼" type="password" />
                    </a-form-item>
                    <a-form-item has-feedback label="確認密碼">
                        <a-input v-model:value="signUpUser.checkPassword" placeholder="請再次確認密碼" type="password"
                            autocomplete="off" />
                    </a-form-item>
                </a-form>
            </a-modal>
        </a-menu>

    </a-layout-header>


</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { login, register, memberInfo } from "@/api/index.js";
import store from '@/store'
export default {
    name: "TheHeader",
    setup() {
        /**
         * 持續登入實體
         */
        const user = store.state.user;

        /**
         * 登入實體
         */
        const signInUser = reactive({
            email: "",
            password: "",
            token: "",
        });

        /*
         * 註冊實體
         */
        const signUpUser = reactive({
            email: "",
            username: "",
            password: "",
            checkPassword: "",
            token: "",
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
            if (signUpUser.password != signUpUser.checkPassword) {
                alert("兩次密碼不一致")
                return false;
            }
            signUp()
        };

        async function signIn() {
            const res = await login(signInUser);
            const result = res.data.body
            const state = res.data.statusCode
            if (state == "OK") {
                alert("登入成功")
                signInUser.token = result;
                const res = await memberInfo(signInUser);
                store.commit("setUser", res.data.body)
                signInVisible.value = false;
                window.location.reload();
            } else {
                alert(result)
            }
        }
        async function signUp() {
            const res = await register(signUpUser);
            const result = res.data.body
            if (result == "註冊成功") {
                const res = await login(signUpUser);
                const result = res.data.body
                const state = res.data.statusCode
                if (state == "OK") {
                    alert("註冊成功，已自動登入")
                    signUpUser.token = result
                    const res = await memberInfo(signUpUser);
                    store.commit("setUser", res.data.body)
                    signUpVisible.value = false;
                    window.location.reload();
                } else {
                    alert(result)
                }
            } else {
                alert(result)
            }
        }

        const logout = () => {
            store.commit("setUser", {});
            window.location.reload();
        };

        return {
            user,
            signInUser,
            signUpUser,
            popSignIn,
            popSignUp,
            signInVisible,
            signUpVisible,
            handleSignInOk,
            handleSignUpOk,
            logout,
        }
    }
};




</script>

<style scoped>
.ant-layout-header {
    background: #FFFFFF;
}


.icon {
    float: left;
    width: 100px;
    height: 70px;
    margin: 0px 0px 0px 0;
}
</style>