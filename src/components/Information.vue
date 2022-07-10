<template>


    <div class="card" style="width: 18rem;position: absolute; top:25%;left: 20%;">
        <img src="../assets/123/user.png" class="card-img-top">
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