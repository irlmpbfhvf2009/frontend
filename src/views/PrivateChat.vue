<template>
    <div style="width:100%; margin: 0 auto; background-color: white;
                    border-radius: 5px; box-shadow: 0 0 10px #ccc">
        <div style="text-align: center; line-height: 50px;">
            {{ data.friendName }}
        </div>
        <div style="height: 350px; overflow:auto; border-top: 1px solid #ccc" v-html="data.content"></div>
        <div style="height: 200px">
            <textarea v-model.value="data.message" style="height: 160px; width: 100%; padding: 20px; border: none; border-top: 1px solid #ccc;
             border-bottom: 1px solid #ccc; outline: none"></textarea>
            <div style="text-align: right; padding-right: 10px">
                <a-button type="primary" size="mini" @click="sendDataToFriend">發送</a-button>
            </div>
        </div>
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
            content: "",
        })

        onMounted(() => {
            const route = useRoute();
            data.friendName = route.params.friendName;
            data.wsIsRun = true;
            /* wsInit(data.friendName); */
        })

        const sendDataToFriend = () => {
            if (data.webSocket.readyState === 1) {
                let message = { send: store.state.user.username, receive: data.friendName, text: data.message }
                data.webSocket.send(JSON.stringify(message));
                data.message = '';
            } else {
                throw Error('服務器未連接')
            }
        }

        const wsInit = (friendName) => {
            const username = store.state.user.username
            if (username != undefined) {
                const host = window.location.hostname;
                if(host==='localhost'){
                    data.ws = 'ws://localhost:9090/websocket/' + username + '/' + friendName
                }else{
                    data.ws = 'wss://limitless-hamlet.herokuapp.com/websocket/' + username + '/' + friendName
                }
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
            const jsonStr = JSON.parse(e.data)
            const send = jsonStr.send;
            const receive = jsonStr.reactive;
            const text = jsonStr.text;
            let html;
            if (send === store.state.user.username) {
                html = "<div style=\"padding: 5px 0\">\n" +
                    " <div style=\"text-align: right; padding-right: 10px\">\n" +
                    "    <div class=\"tip left\">" + text + "</div>\n" +
                    "  </div>\n" +
                    "  <div>\n" +
                    "  <span  style=\"height: 40px; width: 40px; line-height: 40px;\">\n" +
                    /* "    <img src=\"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png\" style=\"object-fit: cover;\">\n" + */
                    "  </span>\n" +
                    "  </div>\n" +
                    "</div>";
            } else {
                html = "<div class=\"el-row\" style=\"padding: 5px 0\">\n" +
                    "  <div class=\"el-col el-col-2\" style=\"text-align: right\">\n" +
                    "  <span class=\"el-avatar el-avatar--circle\" style=\"height: 40px; width: 40px; line-height: 40px;\">\n" +
/*                     "    <img src=\"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png\" style=\"object-fit: cover;\">\n" +
 */                    "  </span>\n" +
                    "  </div>\n" +
                    "  <div class=\"el-col el-col-22\" style=\"text-align: left; padding-left: 10px\">\n" +
                    "    <div class=\"tip right\">" + text + "</div>\n" +
                    "  </div>\n" +
                    "</div>";
            }
            data.content += html;
        }
        const wsErrorHanler = (event) => {
            console.log(event, '通信發生錯誤')
        }
        const wsCloseHanler = (event) => {
            console.log(event, 'ws關閉')
        }
        const wsDestroy = () => {
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
<style>
.tip {
    color: white;
    text-align: center;
    border-radius: 10px;
    font-family: sans-serif;
    padding: 10px;
    width: auto;
    display: inline-block !important;
    display: inline;
}

.right {
    background-color: deepskyblue;
}

.left {
    background-color: forestgreen;
}
</style>