<template>


    <div class="card" style="width: 18rem;position: absolute; top:25%;left: 20%;">
        <img src="../assets/123/user.png" class="card-img-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff" stroke="#000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(2 3)">
                <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"></path>
                <circle cx="10" cy="10" r="4"></circle>
            </g>
        </svg>
        <div class="card-body">
            <h5 class="card-title">真的沒喝多</h5>
            <p class="card-text">年齡: 27 y
                地區: 新北
                身高: 170 CM
                體重: 60 KG
                星座: 摩羯座
                體型: 平均
                職業: 其他
                學歷: 大學
                慣用語言: 繁體中文
                抽菸習慣 完全不
                飲酒習慣： 完全不
                等級: 3</p>
        </div>
    </div>
    <div style="position: absolute;top:25%;left:50%">
        <div>自我介紹</div>
        <div>我的菜</div>
        <div>我的貼文</div>
    </div>


</template>
<script>
import avatar from '@/assets/123/user.png'
import { ref, reactive, computed, onMounted } from 'vue'
export default ({
    setup() {
        const data = reactive({
            ava: avatar
        })


        return {
            data
        }
    }
})
</script>
<style>
</style>