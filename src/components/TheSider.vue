<template>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, paddingTop: '60px' }">
        <a-menu mode="inline" style="height: 100%">

            <a-divider />
            <a-button type="primary" :style="{ left: '50px' }" @click="addFriend">新增好友</a-button>
            <a-modal v-model:visible="addFriendVisible" title="新增好友" @ok="addFriendOk">
                <a-form>
                    <a-form-item label="用户名">
                        <div>                       
                            <a-input v-model:value="user.friendUsername" :style="{width:'350px'}" placeholder="請輸入用戶名" />
                            <a-button type="primary" @click="searchFriendBtn">搜尋</a-button>
                        </div>
                        <a-row :gutter="16">

                        <!-- <a-col :span="24">123</a-col> -->

                        </a-row>
                    </a-form-item>
                </a-form>
            </a-modal>

            <a-divider />
            <a-sub-menu>
                <template #title>
                    <span>我的好友</span>
                </template>
            </a-sub-menu>



        </a-menu>
    </a-layout-sider>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { searchFriend } from "@/api/index.js";
export default {
    name: "TheSider",
    setup() {
        const user = reactive({
            email: localStorage.getItem("email"),
            username: "",
        });
        const addFriendVisible = ref(false);

        const addFriend = () => {
            addFriendVisible.value = true;
        };
        const addFriendOk = () => {
            alert("功能開發中")
            addFriendVisible.value = false;
        };
        
        async function searchFriendBtn() {
            if(user.email==null){
                alert("請先登入")
                return false;
            }
            console.log(user.username)
            const res = await searchFriend(user);
            console.log(res)
            const result = res.data.body
            console.log(result)
        }
        
        return {
            user,
            addFriend,
            addFriendVisible,
            addFriendOk,
            searchFriend,
            searchFriendBtn,
        }
    }
}

</script>

<style scoped>
.sider {
    height: 15px;
    background: rgba(255, 255, 255, 0.2);
    margin: 5px;
    text-align: center;
    font-size: 15px;
}

.sider-title {
    text-align: center !important;
}
</style>