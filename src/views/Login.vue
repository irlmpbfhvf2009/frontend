<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin card-regist comic-shadow accent-shadow my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center" data-i18n="login">會員登入</h5>
                        <form class="form-signin">
                            <div class="form-group">
                                <input type="email" v-model="signInUser.email" id="inputEmail" class="form-control"
                                    data-i18n-placeholder="login-account-hint" placeholder="帳號: abcd@email.com"
                                    autofocus>
                            </div>

                            <div class="form-group">
                                <input type="password" v-model="signInUser.password" id="inputPassword"
                                    class="form-control" data-i18n-placeholder="login-password-hint" placeholder="密碼">
                                <span><a href="PasswordForget"><small class="pl-1 text-secondary"
                                            data-i18n="login-forget">忘記密碼？</small></a></span>

                            </div>
                            <div class="d-flex flex-column px-2 mb-3 justify-content-between">
                                <div class="text-center">
                                    <div>
                                        <a class="text-muted" href="regist.html">
                                            <small>
                                                <span data-i18n="login-not-member">還不是會員？請先</span>
                                                <router-link to="/register">
                                                    <span class="text-primary pointer"
                                                        data-i18n="login-regist">註冊</span>
                                                </router-link>
                                            </small>
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </form>
                        <button class="btn btn-lg btn-primary btn-block form-main-btn" @click="signIn"
                            data-i18n="login">
                            登入
                        </button>
                        <div class="text-or"><span data-i18n="or"></span></div>

                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="template-modal modal fade" id="login-modal" tabindex=" -1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#d9455f" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">

                                <h2 class="h4 text-uppercase" data-i18n="login-error-title">登入失敗</h2>
                                <p class="item-intro text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#d9455f" stroke-width="1" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </p>
                                <p data-i18n="login-error">您的帳號或是密碼有誤，請再試一次。</p>
                                <button class="btn btn-primary" data-dismiss="modal" type="button"><i
                                        class="fas fa-times mr-1"></i>Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { login, register, memberInfo } from "@/api/index.js";
import store from '@/store'
import { useRouter } from "vue-router";
export default {
    name: "TheHeader",
    setup() {
        const signInUser = reactive({
            email: "",
            password: "",
            token: "",
        });
        const router = useRouter();
        async function signIn() {
            const res = await login(signInUser);
            const result = res.data.body
            const state = res.data.statusCode
            if (state == "OK") {
                alert("登入成功")
                signInUser.token = result;
                const res = await memberInfo(signInUser);
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
        }
        return {
            signInUser,
            signIn,
        }
    }
}
</script>