<template>
    <div class="container-fluid bg" :style="{ backgroundImage: `url(${backgroundImage.backgroundImage})` }">
        <div class="row align-items-center">
            <div class="col">
                <!-- 登入表單 -->
                <form class="loginForm rounded p-4 m-auto">
                    <h2 class="text-center">會員登入</h2>
                    <div class="form-group m-4">
                        <input type="email" v-model="signIn.email" class="form-control mb-3" placeholder="Enter email">
                        <input type="password" v-model="signIn.password" class="form-control" placeholder="Password"
                            autocomplete="on">
                    </div>
                    <div class="form-group m-2">
                        <div>
                            <a class="color255148109">忘記密碼?</a>
                        </div>
                        <div>還不是會員？請先
                            <a class="color227133182" @click="registerForm">註冊</a>
                        </div>
                    </div>
                    <div class="form-group text-center m-3">
                        <button type="button" class="btn btn-secondary" @click="submitLogin">登入</button>
                    </div>
                </form>

                <!-- 註冊表單 -->
                <form class="registerForm rounded p-4 m-auto">
                    <div class="form-group">
                        <h2 class="text-center">會員註冊</h2>
                    </div>
                    <div class="form-group">
                        <select v-model="signUp.gender" class="form-select mb-3">
                            <option value="0" selected> -- 請選擇您的性別 --</option>
                            <option value="boy">我是有錢的女生</option>
                            <option value="girl">我是男生</option>
                        </select>
                    </div>
                    <div class="form-group mb-3 text-light">
                        生日
                        <select v-model="birthday.year" class="form-select year d-inline w-25">
                            <option selected value="year">年</option>
                        </select>
                        <select v-model="birthday.month" class="form-select month d-inline w-25">
                            <option selected value="month">月</option>
                        </select>
                        <select v-model="birthday.day" class="form-select day d-inline w-25">
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="signUp.username" class="form-control"
                            placeholder="請輸入暱稱(註冊後不可更改)" /><br>
                        <input type="email" v-model="signUp.email" class="form-control" placeholder="請輸入電子郵件" /><br>
                        <input type="password" v-model="signUp.password" class="form-control" placeholder="請輸入密碼"
                            autocomplete="on" /><br>
                        <input type="password" v-model="signUp.checkPassword" class="form-control" placeholder="請確認密碼"
                            autocomplete="on" /><br>
                    </div>
                    <div class="form-group">
                        <div class="m-1 text-light">本站可能有部分成人內容，註冊即表示您成年並且已閱讀並同意隱私權政策與服務條款</div>
                        <div class="m-1 text-light">已經是會員了？請<a class="color227133182" @click="loginForm">點擊登入</a></div>
                    </div>
                    <div class="form-group text-center m-3">
                        <button type="button" class="btn btn-danger" @click="submitRegister">使用信箱註冊</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>

import { reactive, onMounted ,getCurrentInstance } from "vue";
import userApi from "../../../api/user"
import $ from 'jquery'
import "../../../assets/css/baoyang/form.css";
import bg from "../../../assets/img/baoyang/bg.jpg";

const { proxy } = getCurrentInstance();
const common = proxy.$commonJs

const backgroundImage = reactive({
    backgroundImage: bg,
})

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
    constellation: '',
    token: '',
})
const birthday = reactive({
    year: '',
    month: '',
    day: '',
})
const init = () => {
    $('.registerForm').css('display', 'none')

    var date = new Date();
    var year = date.getFullYear()
    for (var i = year - 70; i <= year; i++) {
        $('.year').append("<option value=" + i + ">" + i + "</option>")
    }
    for (var i = 1; i <= 12; i++) {
        $('.month').append("<option value=" + i + ">" + i + "</option>")
    }
    $('.day').append("<option value=" + "日" + ">" + "日" + "</option>")
    const getDaysInMonth = (month, year) => {//年月對應的日數算法
        var days;
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            days = 31;//固定31
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            days = 30;//固定30
        } else {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {     //排除百年，每四年一閨；每四百年一閨；
                days = 29; //閨年29
            } else {
                days = 28; //平年28
            }
        }
        return days;
    }
    $(".month").change(function () {
        getDays($('.month').val(), $('.year').val())
    });
    const getDays = () => {
        var year = $(".year").val();
        var month = $(".month").val();
        var days = getDaysInMonth(month, year);
        $(".day").empty();
        $(".day").append("<option value='日'>日</option>");
        for (var i = 1; i <= days; i++) {
            $(".day").append("<option value=\"" + i + "\">" + i + "</option>");
        }
    }
}
const loginForm = () => {
    $('.loginForm').css('display', 'block');
    $('.registerForm').css('display', 'none');
}
const registerForm = () => {
    $('.loginForm').css('display', 'none');
    $('.registerForm').css('display', 'block');
}


async function submitLogin() {
    const res = await userApi.login(signIn);
    const data = res.data.body
    sessionStorage.setItem('token', data)
    const state = res.data.statusCode
    if (state == "OK") {
        common.success("登入成功")
        signIn.token = data;
        const res = await userApi.memberInfo(signIn)
        const memberInfo = res.data.body
        const user = JSON.stringify(memberInfo);
        sessionStorage.setItem('user', user)
        if (memberInfo.roles[0] == "ADMIN") {
            common.changeView('/adminHome')
        } else if (memberInfo.roles[0] == "USER") {
            common.changeView('/home')
        }
    } else {
        common.error(data)
    }
}
function calculateAge(b) {
    const ageDifMs = Date.now() - new Date(b).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function getAstro(m, d) {
    return "魔羯水瓶雙魚牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯".substring(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
}
async function submitRegister() {
    if (signUp.password != signUp.checkPassword) {
        common.error('兩次密碼輸入不一致')
        signUp.password = '';
        signUp.checkPassword = '';
        return false;
    }
    var age = calculateAge(birthday.year + '-' + birthday.month + '-' + birthday.day)
    if (isNaN(age) || birthday.month == "" || birthday.day == "" || birthday.year == "") {
        common.error('生日錯誤');
        return false;
    }
    if (signUp.gender == "0") {
        common.error('性別沒選');
        return false;
    }
    if (age < 18) {
        common.error('年齡必須大於18');
        return false;
    }
    signUp.age = age;
    var c = getAstro(birthday.month, birthday.day);
    signUp.constellation = c + '座';
    const res = await userApi.register(signUp);
    const result = res.data.body
    if (result == "註冊成功") {
        const res = await userApi.login(signUp);
        const data = res.data.body
        const state = res.data.statusCode
        common.success("註冊成功")
        if (state == "OK") {
            signUp.token = data
            const res = await userApi.memberInfo(signUp)
            const memberInfo = res.data.body
            const user = JSON.stringify(memberInfo);
            sessionStorage.setItem('user', user)
            common.changeView('/home')
        } else {
            common.error(data)
        }
    } else {
        common.error(result)
    }
}

onMounted(() => {
    init();
})

</script>