<template>
    <div :style="{ height:'500px'}">
    </div>
    <div>
        <a-input v-model:value="a.b" :style="{ width:'700px' }" />
        <a-button @click="sendDataToServer">發送消息</a-button>
    </div>
</template>

<script>
import store from '@/store';
import { ref, reactive, computed, onMounted } from 'vue'
export default {
    name: "WebSocket",
    data() {
        return {
            wsIsRun: false,
            webSocket: null,
            ws: '',
            wsTimer: null,
        }
    },
    async mounted() {
        this.wsIsRun = true;
        this.wsInit()
    },
    methods: {
        sendDataToServer() {
            this.webSocket.send('asd')
            if (this.webSocket.readyState === 1) {
                this.webSocket.send('來自前端的數據')
            } else {
                throw Error('服務器未連接')
            }
        },
        wsInit() {
            const url = process.env.VUE_APP_BASE_API;
            const wsurl = 'ws://localhost:9090/websocket/' + store.state.user.username
            this.ws = wsurl
            if (!this.wsIsRun) return
            this.wsDestroy()
            this.webSocket = new WebSocket(this.ws)
            this.webSocket.addEventListener('open', this.wsOpenHanler)
            this.webSocket.addEventListener('message', this.wsMessageHanler)
            this.webSocket.addEventListener('error', this.wsErrorHanler)
            this.webSocket.addEventListener('close', this.wsCloseHanler)
            clearInterval(this.wsTimer)
            this.wsTimer = setInterval(() => {
                if (this.webSocket.readyState === 1) {
                    clearInterval(this.wsTimer)
                } else {
                    console.log("ws建立連接失敗")
                    this.wsInit()
                }
            }, 3000);
        },
        wsOpenHanler(event) {
            console.log('ws建立連接成功')
        },
        wsMessageHanler(e) {
            console.log('wsMessageHanler')
            console.log(e)
        },
        wsErrorHanler(event) {
            console.log(event, '通信發生錯誤')
            this.wsInit
        },
        wsCloseHanler(event) {
            console.log(event, 'ws關閉')
            this.wsInit
        },
        wsDestroy() {
            if (this.webSocket !== null) {
                this.webSocket.removeEventListener('open', this.wsOpenHanler)
                this.webSocket.removeEventListener('message', this.wsMessageHanler)
                this.webSocket.removeEventListener('error', this.wsErrorHanler)
                this.webSocket.removeEventListener('close', this.wsCloseHanler)
                this.webSocket.close()
                this.webSocket = null
                clearInterval(this.wsTimer)
            }
        }
    },
    setup() {
        const a = reactive({
            b: "",
        })
        
        return {
            a,
        }
    },


}
</script>