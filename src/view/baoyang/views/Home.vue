<template>

    <div class="navv">
        <span class="openNav" @click="openNav">&#9776;</span>
        <span class="pat7l48"></span>
        <div class="pat7l80">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr20" width="25" height="25" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                </path>
            </svg>
        </div>
    </div>


    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <img class="aveter" src="../../../assets/img/baoyang/003.jpg" @click="information()">
        <svg class="pal250t170" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
            fill="#fff" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(2 3)">
                <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"></path>
                <circle cx="10" cy="10" r="4"></circle>
            </g>
        </svg>
        <div class="list">
            <a @click="home()" href="#/home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" fill="none" stroke="#c1a57b" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="mb-1 mr-1">
                    <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path>
                    <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"></path>
                </svg> 首頁</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                    <circle cx="12" cy="12" r="10"></circle>
                </svg> 升級VIP</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg> 動態貼文</a>
            <a href="#"><img class="w16h16di"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVQ4jcWRv2sUURDHPzO3uzEmFoKCKUwTDmIOjPkD3EupKVPlEHuJvWBW4VbMpUwftNI7NEUqKxtvVysrUdAiVUBsYhVzevD23tjk4hnPaKVfeDDz+P4YZuB/Q/pF9uTOBSms+jciCySrLt3/AKCHvz1/E5hArHvsg4kDLgDBD1v5Av5pfG3t/XHp+ePbM5he/8XAuzAdDYn+NH7EyMdvjrTfK0C7ldQ0cm+76vKslaz/Tpy1kvWuulwj9y5vriwBqBkiRjq2H16q1lbnxDOdt1YuHhW/fHR3VjzT1drq3Nh+OGvIPTNESeuCUcAnJ4KZ2NeeDSz3AIX2xISOCDZ6mgJwpHUJ2lNFrIJ0xs++zprJLnBeYAF4M2ggyAJQyZrJ88/OnQG0PVXEqkrDS3jZiV3xvrccb4cVgcVXD2+d6otfbNbHBRbj7bDifW/ZiV2V0MeqthaAnVBzDxQBLZGXHcCk05Olw/gOARGTedltKSXUwJwAjASAF7Fng+OaSXnIEXaH8G4EIA0zZn7mysb8Dnv9bn6HvbwsG2acO8JrDAn6x/gOJiOtfVVMln8AAAAASUVORK5CYII=">
                配對附近的人</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg> 搜尋</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                </svg> 我追蹤的</a>
            <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1a57b" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                    </path>
                </svg> 追蹤我的</a>
            <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1a57b" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg> 看過我的</a>
            <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1a57b" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg> 進階設定</a>
            <a href="#" @click="loginout()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1a57b"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"></path>
                </svg> 登出</a>


            <a href="#" @click="square"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c1a57b"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg> 客服諮詢</a>
        </div>
    </div>
    <component :is="components.view" />
</template>

<script setup>
import { reactive, onBeforeMount, ref, onMounted, markRaw } from "vue";
import { ElMessage } from "element-plus";
import "../../../assets/css/baoyang/home.css";
import userApi from "../../../api/user"
import Information from '../components/Information.vue'
import AllGirl from '../components/AllGirl.vue'
import $ from 'jquery'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();

const user = JSON.parse(sessionStorage.getItem("user"))
const components = reactive({
    view: markRaw(AllGirl),
})
const information = () => {
    components.view = markRaw(Information)
    closeNav()
}
const home = () => {
    components.view = markRaw(AllGirl)
    closeNav()
}
const loginout = () => {
    sessionStorage.clear();
    proxy.$commonJs.changeView('/index')
    closeNav()
};
function openNav() {
    $('#mySidenav').css("visibility", "visible");
};
function closeNav() {
    $('#mySidenav').css("visibility", "hidden");
};
</script>