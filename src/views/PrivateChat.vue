<template>
    <div :style="{ height: '500px' }">
    </div>
    <div>
        <input v-model.value="data.message" :style="{ width: '700px' }" />
        <a-button @click="sendDataToFriend">發送消息</a-button>
    </div>
</template>
<script>
import { onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router"
import store from '@/store';

export default ({
    name: "privateChat",
    setup() {
        const data = reactive({
            wsIsRun: false,
            webSocket: null,
            ws: '',
            wsTimer: null,
            message: "",
            friendName: "",
        })

        onMounted(() => {
            const route = useRoute();
            data.friendName = route.params.friendName;
            data.wsIsRun = true;
            /* wsInit(data.friendName); */
        })

        const sendDataToFriend = () => {
            if (data.webSocket.readyState === 1) {
                data.webSocket.send(data.message);
                data.message = '';
            } else {
                throw Error('服務器未連接')
            }
        }

        const wsInit = (friendName) => {
            const username = store.state.user.username
            if (username != undefined) {
                const wsurl = 'ws://localhost:9090/websocket/' + username + '/' + friendName
                data.ws = wsurl
                if (!data.wsIsRun) 
                return wsDestroy()
                data.webSocket = new WebSocket(data.ws)
                data.webSocket.addEventListener('open', wsOpenHanler)
                data.webSocket.addEventListener('message', wsMessageHanler)
                data.webSocket.addEventListener('error', wsErrorHanler)
                data.webSocket.addEventListener('close', wsCloseHanler)
                clearInterval(data.wsTimer)
                data.wsTimer = setInterval(() => {
                    if (data.webSocket.readyState === 1) {
                        clearInterval(data.wsTimer)
                    } else {
                        console.log("建立連接失敗")
                    }
                }, 5000);
            }
        }

        const wsOpenHanler = () => {
            console.log('建立連接成功')
        }
        const wsMessageHanler = (e) => {
            console.log(e.data)
        }
        const wsErrorHanler = (event) => {
            console.log(event, '通信發生錯誤')
        }
        const wsCloseHanler=(event) =>{
            console.log(event, 'ws關閉')
        }
        const wsDestroy=() =>{
            if (data.webSocket !== null) {
                data.webSocket.removeEventListener('open', wsOpenHanler)
                data.webSocket.removeEventListener('message', wsMessageHanler)
                data.webSocket.removeEventListener('error', wsErrorHanler)
                data.webSocket.removeEventListener('close', wsCloseHanler)
                data.webSocket.close()
                data.webSocket = null
                clearInterval(data.wsTimer)
            }
        }
        const route = useRoute();
        watchEffect(() => {
            data.friendName = route.params.friendName;
            wsInit(data.friendName);
        })
        return {
            data,
            sendDataToFriend,
        }
    }
})
</script>
