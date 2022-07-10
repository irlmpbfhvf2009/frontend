<template>


</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { login, register, memberInfo } from "@/api/index.js";
import store from '@/store'
import { useRouter } from "vue-router";
export default {
    name: "TheHeader",
    setup() {
        const signInUser = reactive({
            email: "",
            password: "",
            token: "",
        });
        const router = useRouter();
        async function signIn() {
            const res = await login(signInUser);
            const result = res.data.body
            const state = res.data.statusCode
            if (state == "OK") {
                alert("登入成功")
                signInUser.token = result;
                const res = await memberInfo(signInUser);
                store.commit("setUser", res.data.body)
                router.push({
                    name: 'Home',
                    params: {
                        /* friendId: friendId,
                        friendName: friendName, */
                    }
                })

            } else {
                alert(result)
            }
        }
        return {
            signInUser,
            signIn,
        }
    }
}
</script>
<style>

</style>