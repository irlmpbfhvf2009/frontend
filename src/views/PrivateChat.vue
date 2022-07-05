<template>
    {{friend.friendId}}
</template>

<script>
import { onMounted,reactive, watchEffect } from "vue";
import { useRoute } from "vue-router"
 
    export default ({
        name: "privateChat",
        components: {
        },
        setup() {
            const route = useRoute();
            const friend = reactive({
                friendId:"",
                friendName:"",
            })
            watchEffect(()=>{
                friend.friendId = route.params.friendId;
                friend.friendName = route.params.friendName;
            })
            return {
                friend,
            }
        },
    });
</script>

<style scoped>

</style>