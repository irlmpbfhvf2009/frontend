<template>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, paddingTop: '60px' }">
        <a-menu mode="inline" style="height: 100%">

            <a-divider />
            <a-button type="primary" :style="{ left: '50px' }" @click="inviteFriend">交友邀请</a-button>
            <a-modal v-model:visible="addFriendVisible" title="交友邀请" ok-text="" cancel-text="取消" @ok="addFriendOk">
                <a-form>
                    <a-form-item label="信箱">
                        <div>
                            <a-input v-model:value="user.email" :style="{ margin_right: '20px', width: '300px' }"
                                placeholder="請輸入對方信箱" />
                            <a-button type="primary" @click="addFriendBtn">送出邀請</a-button>
                        </div>
                        <a-row :gutter="16">
                            <a-col :span="24"></a-col>
                        </a-row>
                    </a-form-item>
                    查看送出的邀請
                </a-form>
            </a-modal>

            <a-divider />
            <a-sub-menu>
                <template #title>
                    <span>我的好友</span>
                </template>
                <a-menu-item v-for="(item,index) in friendList" :key="index" >
                    <span style="margin-left: 0px">
                        {{ item }}
                    </span>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { addFriend, myFriend } from "@/api/index.js";
export default {
    name: "TheSider",
    setup() {
        const user = reactive({
            email: "",
            loginEmail:localStorage.getItem("email"),
        });
        const addFriendVisible = ref(false);

        const inviteFriend = () => {
            addFriendVisible.value = true;
        };
        const addFriendOk = () => {
            alert("功能開發中")
            addFriendVisible.value = false;
        };

        async function addFriendBtn() {
            if (user.loginEmail == null) {
                alert("請先登入")
                return false;
            }
            const res = await addFriend(user);
            const state = res.data.statusCode
            const result = res.data.body
            if (state == "ok") {
                alert(result)
            } else {
                alert(result)
            }
        }
        const friendList = ref();
        async function searchMyFriend() {
            if (user.loginEmail != null) {
                const res = await myFriend(user);
                const result = res.data.body
                var array =new Array();
                for(let i=0;i<result.length;i++){
                    array.push(result[i]);
                }
                friendList.value=array?array :[];
            }
        }
        onMounted(() => {
            /* searchMyFriend(); */
        })
        return {
            user,
            inviteFriend,
            addFriend,
            addFriendVisible,
            addFriendOk,
            addFriend,
            addFriendBtn,
            myFriend,
            searchMyFriend,
            friendList,
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