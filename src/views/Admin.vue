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
            email: "",
        });
        async function submit() {
            const res = await findByEmail(user);
            alert(res.data.body)
        }
        return {
            submit,
            user,
        };
    }
}

</script>