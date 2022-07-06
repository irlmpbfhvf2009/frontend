<template>
    {{ friend.friendId }}
    <WebSocket></WebSocket>
    <WebSocket2></WebSocket2>
</template>

<script>
import { onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router"
import WebSocket from '@/components/WebSocket/WebSocket'

export default ({
    name: "privateChat",
    components:{
        WebSocket,
    },
    setup() {
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
