<!-- <template>
    <div :style="{ height: '500px' }">
    </div>
    <div>
        <input v-model="message" :style="{ width: '700px' }" />
        <a-button @click="sendDataToServer">發送消息{{ friendName }}</a-button>
    </div>
</template>
<script>
import { onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router"
import store from '@/store';

export default ({
    name: "privateChat",
    data() {
        return {
            wsIsRun: false,
            webSocket: null,
            ws: '',
            wsTimer: null,
            message: "",
            friendName: "",
        }
    },
    async mounted() {
        const route = useRoute();
        this.friendName = route.params.friendName;
        this.wsIsRun = true;
        this.wsInit();
    },
    watchEffect: {
    },
    methods: {
        sendDataToServer() {
            if (this.webSocket.readyState === 1) {
                this.webSocket.send(this.message)
                this.message = ''
            } else {
                throw Error('服務器未連接')
            }
        },
        setFriendId(friendName) {
            this.friendName = friendName;
        },
        wsInit() {
            const url = process.env.VUE_APP_BASE_API;
            const id = store.state.user.id
            const username = store.state.user.username
            const friendId = this.friendId;
            const friendName = this.friendName;
            if (username != undefined) {
                const wsurl = 'ws://localhost:9090/websocket/' + username + '/' + friendName
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
                        console.log("建立連接失敗")
                        this.wsInit()
                    }
                }, 3000);
            }
        },
        wsOpenHanler(e) {
            console.log('建立連接成功')
        },
        wsMessageHanler(e) {
            console.log(e.data)
            this.sessionId = e.data
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
        const user = store.state.user
        const route = useRoute();
        const friend = reactive({
            friendId: "",
            friendName: "",
        })
        watchEffect(() => {
            friend.friendId = route.params.friendId;
            friend.friendName = route.params.friendName;
        })
        return {
            friend,
        }
    },
});
</script>
 -->