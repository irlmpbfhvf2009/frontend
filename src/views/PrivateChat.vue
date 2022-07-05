<template>
    {{friendName}}
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router"
 
    export default ({
        name: "privateChat",
        components: {
        },
        setup() {
            const route = useRoute();
           /*  onMounted(()=>{ */
                const friendId = route.params.friendId;
                const friendName = route.params.friendName;
                console.log("参数"+" "+friendName+" "+friendId)
            /* }) */
            return {
                friendName,
            }
        },
    });
</script>

<style scoped>

</style>