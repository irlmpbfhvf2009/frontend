<template>
    <input type="text" placeholder="請輸入信箱" v-model="user.email" @keyup.enter="submit">
</template>

<script>
import { computed, inject, onMounted, reactive, ref } from "@vue/runtime-core";
import { findByEmail } from "@/api/index.js";
export default {
    name: "Admin",
    setup() {
        const user = reactive({
            email: "7752@yahoo.com.tw",
        });
        async function submit() {
            const res = await findByEmail(user);
            console.log(res.data)
        }
        return {
            submit,
            user,
        };
    }
}

</script>