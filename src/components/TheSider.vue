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
                            <a-input v-model:value="email.email" :style="{ margin_right: '20px', width: '300px' }"
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
                <a-menu-item v-for="(friend) in friendList" :key="friend.id" @click="toChat(friend.id,friend.username)">
                    <span style="margin-left: 0px">
                        {{ friend.username }}
                    </span>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>

import { ref, reactive, computed, onMounted } from 'vue'
import { addFriend, myFriend } from "@/api/index.js";
import store from '@/store'
import { useRouter } from "vue-router";

export default {
    name: "TheSider",
    setup() {
        /**
         * 持續登入實體
         */
        const user = store.state.user;

        const email = reactive({
            loginEmail: user.email,
            email: "",
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
            if (email.loginEmail == null) {
                alert("請先登入")
                return false;
            }
            const res = await addFriend(email);
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
            if (email.loginEmail != null) {
                const res = await myFriend(email);
                const result = res.data.body;
                friendList.value = result;
            }
        }
        const router = useRouter();
        const toChat = (friendId,friendName) => {
            router.push({
                name: 'privateChat',
                params: {
                    friendId: friendId,
                    friendName: friendName,
                }
            })
        }
        onMounted(() => {
            /* searchMyFriend(); */
        })
        return {
            user,
            email,
            inviteFriend,
            addFriend,
            addFriendVisible,
            addFriendOk,
            addFriend,
            addFriendBtn,
            myFriend,
            searchMyFriend,
            friendList,
            toChat,
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