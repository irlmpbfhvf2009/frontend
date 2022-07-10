<template>


    <div class="card" style="width: 18rem;position: absolute; top:25%;left: 20%;">
        <img src="../assets/123/user.png" class="card-img-top">
        <svg style="position:absolute;left:240;cursor:pointer;top:20;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff" stroke="#000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(2 3)">
                <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"></path>
                <circle cx="10" cy="10" r="4"></circle>
            </g>
        </svg>
        <div class="card-body">
            <h3 class="card-title">{{ user.username }} &nbsp;&nbsp;&nbsp;等級: 3</h3>
            <p class="card-text">
            <p><span class="ee">年齡: {{ user.age }} y</span> <span>地區: {{ user.area }}</span></p>
            <p><span class="ee">身高: {{ user.height }} {{data.cm}}</span> <span>體重: {{ user.weight }} {{data.kg}}</span></p>
            <p><span class="ee">星座: {{ user.constellation }}</span> <span>體型: {{ user.bodyType }}</span></p>
            <p><span class="ee">職業: {{ user.profession }}</span> <span>學歷: {{ user.education }}</span></p>
            <p>慣用語言: {{ user.language }}</p>
            <p>抽菸習慣 {{ user.smokes }}</p>
            <p>飲酒習慣： {{ user.drinking }}</p>
            </p>
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
import store from '@/store'
export default ({
    setup() {
        const user = store.state.user;
        const data = reactive({
            ava: avatar,
            cm:'',
            kg:'',
        })
        if(user.height!=null){
            data.cm='CM'
        }
        if(user.weight!=null){
            data.cm='KG'
        }


        return {
            data,
            user,
        }
    }
})
</script>
<style>
.ee {
    width: 130px;
    display: inline-block;
}
</style>