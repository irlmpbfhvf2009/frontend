<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin card-regist comic-shadow accent-shadow my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center" data-i18n="regist">註冊</h5>
                        <form class="form-signin">


                            <div class="form-label-group" id="registForm">
                                <select id="gender" class="form-control form-control-sm">
                                    <option value="" data-i18n="reg-gender-hint">-- 請選擇您的性別 --</option>
                                    <option value="0" data-i18n="reg-gender-male">我是有錢的男生</option>
                                    <option value="1" data-i18n="reg-gender-female">我是女生</option>
                                </select>
                            </div>


                            <div class="mb-3">
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control" rows="1" maxlength="8"
                                        data-i18n-placeholder="reg-nickname-hint" placeholder="請輸入暱稱(註冊後不可更改)" />
                                </div>
                            </div>


                            <div class="mb-3">
                                <div class="form-group">
                                    <input type="email" id="email" class=" form-control" rows="1" maxlength="100"
                                        data-i18n-placeholder="reg-email-hint" placeholder="請輸入電子郵件" />
                                </div>
                            </div>


                            <div class=" mb-3">
                                <div class="birthday-form form-group d-flex align-items-center">
                                    <label for="birthday" class="col-2 px-1 mb-0"><small
                                            data-i18n="reg-birthday">生日</small></label>
                                    <div id="birthdayPicker" class="col-10 px-0 mx-n2"></div>
                                    <div style="display:none"><input type="text" id="birthStr" value=""></div>
                                </div>
                            </div>



                            <div class=" mb-3">
                                <div class="form-group">
                                    <input type="password" class=" form-control"
                                        minlength="8" maxlength="20" placeholder="請輸入密碼" />
                                </div>
                            </div>


                            <div class=" mb-3">
                                <div class="form-group">
                                    <input type="password" id="confirm_password" class="form-control" placeholder="請確認密碼"  minlength="8" maxlength="20" />
                                </div>
                            </div>
                            <div class="d-flex flex-column px-2 mb-3 justify-content-between">
                                <div class="text-center">
                                    <small class="text-muted">
                                        <span data-i18n="reg-agree-hint">本站可能有部分成人內容，註冊即表示您成年並且已閱讀並同意</span>
                                        <a class="text-primary" data-i18n="reg-privacy">隱私權政策</a>
                                        <span data-i18n="reg-and">與</span>
                                        <a class="text-primary" data-i18n="reg-terms">服務條款</a>
                                    </small>
                                </div>
                                <div class="text-center">
                                    <a class="text-muted" href="login.html">
                                        <small>
                                            <span data-i18n="reg-is-member">已經是會員了？請</span>
                                            <router-link to="/login">
                                                <span class="text-secondary pointer"
                                                    data-i18n="reg-login-text">點擊登入</span>
                                                    </router-link>
                                        </small>
                                    </a>
                                </div>
                            </div>


                        </form>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onclick="register()"
                            data-i18n="reg-by-mail">
                            使用信箱註冊
                        </button>
                        <hr class="my-4 text-or">
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="template-modal modal fade" id="registModal" tabindex=" -1" role="dialog" aria-hidden="true">
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

                                <h2 class="h4 text-uppercase" data-i18n="reg-email-send">已發送會員認證信件</h2>
                                <p class="item-intro text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#d9455f" stroke-width="1" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </p>
                                <p data-i18n="reg-email-check">請至信箱查看確認信，完成註冊流程</p>
                                <button class="btn btn-primary" data-dismiss="modal" type="button"
                                    onclick="goto_verify()">
                                    <i class="fas fa-times mr-1"></i><span
                                        data-i18n="reg-close-form">關閉視窗</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default ({
    name: "Register",
})

</script>
<style lang="css">
@import '../assets/styles.css';
</style>