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
        <div style="color:white;text-align: left;">
            生日
            <select v-model="birthday.year" style="width: 20%; display:inline;margin-right: 15px;"
                class="form-select year" aria-label="Default select example">
                <option selected value="year">年</option>
            </select>
            <select v-model="birthday.month" style="width: 20%; display:inline;margin-right: 15px;"
                class="form-select month" aria-label="Default select example">
                <option selected value="month">月</option>
            </select>
            <select v-model="birthday.day" style="width: 20%;display:inline;margin-right: 15px;" class="form-select day"
                aria-label="Default select example">
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
            constellation: '',
            token: '',
        })
        const birthday = reactive({
            year: '',
            month: '',
            day: '',
        })


        const router = useRouter();
        const init = () => {
            $('.register').css('display', 'none')
            var date = new Date();
            var year = date.getFullYear();
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
        function calculateAge(b) {
            const ageDifMs = Date.now() - new Date(b).getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        function getAstro(m, d) {
            return "魔羯水瓶雙魚牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
        }
        async function submitRegister() {
            if (signUp.password != signUp.checkPassword) {
                alert('兩次密碼輸入不一致')
                signUp.password = '';
                signUp.checkPassword = '';
                return false;
            }
            var age = calculateAge(birthday.year + '-' + birthday.month + '-' + birthday.day)
            if (isNaN(age) || birthday.month == "" || birthday.day == "" || birthday.year == "") {
                alert('生日錯誤');
                return false;
            }
            if (signUp.gender == "0") {
                alert('性別沒選');
                return false;
            }
            if (age < 18) {
                alert('年齡必須大於18');
                return false;
            }
            signUp.age = age;
            var c = getAstro(birthday.month, birthday.day);
            signUp.constellation = c + '座';
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
            birthday,
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