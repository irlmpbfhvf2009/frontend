<template>
    <div>
        <el-card>
            <el-input style="width:440px" @clear="searchUser" clearable v-model="searchForm.name" placeholder="請輸入用戶姓名"
                class="input-with-select">
                <template #append>
                    <el-button icon="Search" @click="searchUser" />
                </template>
            </el-input>
            <el-table :data="tableData" border style="width:100%;margin-top:20px">
                <el-table-column prop="name" label="姓名" width="180" />
                <el-table-column prop="age" label="年齡" width="180" />
                <el-table-column label="操作" width="330">
                    <template #default="scope">
                        <el-button type="danger" size="small" @click="deleteUser(scope.row.id)">刪除</el-button>
                        <el-button size="small"
                            @click="() => router.push({ path: '/user/detail', query: { id: scope.row.id } })">詳情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination style="margin-top:20px" :current-page="searchForm.current" :page-size="searchForm.size"
                :page-sizes="[10, 20, 30, 40]" layout="->,total,sizes,prev,pager,next,jumper" :total="total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-card>
    </div>
</template>
<script setup>
import adminApi from "../../api/admin";
import { onMounted, reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'
const router = useRouter();
onMounted(() => {
    getUserList();
})
let tableData = ref([]);
let total = ref(0);
const searchForm = reactive({
    current: 1,
    size: 10,
    name: ''
})
const getUserList = async () => {
    const res = await adminApi.getUserList(searchForm);
    console.log(res);
    tableData.value = res.data.data.records;
    total.value = res.data.data.total;
}
const handleSizeChange = (size) => {
    searchForm.size = size;
    getUserList();
}
const handleCurrentChange = (current) => {
    searchForm.current = current;
    getUserList();
}
const searchUser = () => {
    searchForm.current = 1;
    getUserList();
}
const deleteUser = (id) => {
    ElMessageBox.confirm(
        '確定要刪除該用戶信息嗎?',
        {
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(async () => {
        const res = await adminApi.delUser({ id: id });
        if (res.data.success) {
            ElMessage.success("刪除成功")
            getUserList();
        } else {
            ElMessage.error("刪除失敗")
        }
    }).catch(() => {
        ElMessage({
            type: 'info',
            message: '取消刪除',
        })
    })
}
</script>