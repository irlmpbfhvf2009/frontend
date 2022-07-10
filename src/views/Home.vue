<template>

    <div class="navv" style="height: 120px;">
        <span style="font-size:30px;cursor:pointer;position: absolute;top:5%;left:10%" @click="openNav">&#9776;</span>
        <span style="position:absolute;top:7%;left:48%">姊 姊 我 不 想 努 力 了</span>
        <div style="position:absolute;top:7%;left:80%">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right:20px ;" width="25" height="25"
                viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
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
        <img style="width:130px;height:130px;border-radius: 50%;margin:0px 0px 50px 150px;cursor:pointer ;"
            src="../assets/123/202111112249113769.jpg" @click="information">
        <div class="list" style="width:75%;margin:0px auto;">
            <a @click="home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="mb-1 mr-1">
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
            <a href="#"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVQ4jcWRv2sUURDHPzO3uzEmFoKCKUwTDmIOjPkD3EupKVPlEHuJvWBW4VbMpUwftNI7NEUqKxtvVysrUdAiVUBsYhVzevD23tjk4hnPaKVfeDDz+P4YZuB/Q/pF9uTOBSms+jciCySrLt3/AKCHvz1/E5hArHvsg4kDLgDBD1v5Av5pfG3t/XHp+ePbM5he/8XAuzAdDYn+NH7EyMdvjrTfK0C7ldQ0cm+76vKslaz/Tpy1kvWuulwj9y5vriwBqBkiRjq2H16q1lbnxDOdt1YuHhW/fHR3VjzT1drq3Nh+OGvIPTNESeuCUcAnJ4KZ2NeeDSz3AIX2xISOCDZ6mgJwpHUJ2lNFrIJ0xs++zprJLnBeYAF4M2ggyAJQyZrJ88/OnQG0PVXEqkrDS3jZiV3xvrccb4cVgcVXD2+d6otfbNbHBRbj7bDifW/ZiV2V0MeqthaAnVBzDxQBLZGXHcCk05Olw/gOARGTedltKSXUwJwAjASAF7Fng+OaSXnIEXaH8G4EIA0zZn7mysb8Dnv9bn6HvbwsG2acO8JrDAn6x/gOJiOtfVVMln8AAAAASUVORK5CYII="
                    style="width: 16px; height: 16px; display: inline-block;">配對附近的人</a>
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
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                    </path>
                </svg> 追蹤我的</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg> 看過我的</a>
            <a href="#"> 升級閃耀鑽石</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1 mr-1">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg> 進階設定</a>
            <a @click="loginout"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="#c1a57b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="mb-1 mr-1">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"></path>
                </svg> 登出</a>
        </div>
    </div>
    <component :is="components.view" />

</template>
<script>
import AllGirl from '@/components/AllGirl.vue'
import Information from '@/components/Information.vue'
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from "vue-router";
import store from '@/store';
export default ({
    setup() {
        const user = store.state.user
        const router = useRouter();
        const components = reactive({
            view: AllGirl
        })
        const information = () => {
            components.view = Information
            closeNav()
        }
        const home = () => {
            components.view = AllGirl
            closeNav()
        }
        const loginout = () => {
            store.commit("setUser", {});
            router.push({
                name: 'Start'
            })
            closeNav()
        }

        function openNav() {
            document.getElementById("mySidenav").style.display = "block";
        }
        function closeNav() {
            document.getElementById("mySidenav").style.display = "none";
        }

        return {
            openNav,
            closeNav,
            components,
            home,
            loginout,
            information,

        }
    }
})
</script>
    
    <style>
    .navv {
        background: radial-gradient(circle at center, rgb(255, 175, 175), rgb(246, 124, 124));
    }
    
    
    .sidenav {
        display: none;
        height: 100%;
        width: 400px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background: radial-gradient(circle at center, rgb(255, 255, 255), rgb(255, 243, 243));
        /* background-color: rgb(225, 225, 225); */
        overflow-x: hidden;
        padding-top: 60px;
    }
    
    .list a {
        border: 1px solid #a8a8a8;
        border-top: none;
        border-left: none;
        border-right: none;
    }
    
    .sidenav a {
        padding: 5px 0px 5px 50px;
        text-decoration: none;
        font-size: 18px;
        color: #2a2929;
        display: block;
    }
    
    .sidenav a:hover {
        color: #f7afaf;
    }
    
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
    
    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
    
        .sidenav a {
            font-size: 18px;
        }
    }
    </style>