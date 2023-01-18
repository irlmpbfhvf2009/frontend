<template>
    <div style="width: 25%;">
        <div>
            <el-container>
                <el-header>
                    <div>
                        <p style="float:left;">
                            <el-icon color="#409EFF" :size="50">
                                <ElementPlus />
                            </el-icon>
                        </p>
                        <p style="float: left;font-size:25px;font-weight:bold">
                            歡迎來到瑞恩在線群交往
                        </p>
                    </div>
                </el-header>
            </el-container>
        </div>
        <el-main>
            <el-card class="login_card">
                <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="80px">
                    <el-form-item label="帳號" prop="email">
                        <el-input v-model="form.email" placeholder="請輸入帳號" />
                    </el-form-item>
                    <el-form-item label="密碼" prop="password">
                        <el-input type="password" v-model="form.password" placeholder="請輸入密碼" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit()">登入</el-button>
                        <el-button type="primary" @click="resetForm()">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-main>
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import adminApi from "../../../api/admin"
import { ElMessage } from "element-plus";
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();

const form = reactive({
    email: "",
    password: "",
    token:"",
})
const ruleFormRef = ref();
const rules = reactive({
    email: [{ required: true, message: "帳號不能為空", trigger: "blur" }],
    password: [{ required: true, message: "密碼不能為空", trigger: "blur" }],
})
const onSubmit = () => {
    if (!ruleFormRef) return;
    ruleFormRef.value.validate(async (valid) => {
        if (valid) {
            const res = await adminApi.login(form);
            if (res.data) {
                if (res.data.statusCode = "OK") {
                    sessionStorage.setItem('token', res.data.body)
                    proxy.$commonJs.changeView('/adminHome')
                    //router.push("/home");
                } else {
                    ElMessage.error(res.data.body);
                }
            } else {
                ElMessage.error("服務器內部錯誤");
            }
        } else {
            return false;
        }
    });
};
const resetForm = () => {
    if (!ruleFormRef) return;
    ruleFormRef.value.resetFields();
};
</script>