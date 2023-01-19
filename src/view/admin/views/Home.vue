<template>
        <el-container class="home-container asdasdasd" >
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <p class="system-name">後台管理系統</p>
                    </el-col>
                    <el-col :offset="12" :span="8" style="min-width:150px">
                        <el-dropdown style="float:right;margin:20px 10px">
                            <span class="el-dropdown-link" style="cursor:pointer;">
                                安安安安 &nbsp;&nbsp; 
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click.native="logout()">退出系統</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <el-avatar shape="square" :src="avatar" style="margin:10px;float:right;"></el-avatar>
                    </el-col>
                </el-row>
            </el-header>
        </el-container>
        <el-container class="dsadsadsa">
            <el-aside>
                <div class="toggle-button" @click="isCollapse = !isCollapse">
                    <el-icon :size="70">
                        <Expand v-if="isCollapse" />
                        <Fold v-if="!isCollapse" />
                    </el-icon>
                </div>
                <el-menu router :default-active="activePath" class="el-menu-vertical-demo" :collapse="isCollapse">
                    <el-menu-item index="/index" @click="saveActiveNav('/index')">
                        <el-icon>
                            <house />
                        </el-icon>
                        <span>首頁</span>
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <Setting />
                            </el-icon>
                            <span>系統設置</span>
                        </template>
                        <el-menu-item index="2-1">權限管理</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="/user/list" @click="saveActiveNav('/user/list')">
                        <el-icon>
                            <user />
                        </el-icon>
                        <span>用戶管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    Copyright &copy;2023 瑞恩群交
                </el-footer>
            </el-container>
        </el-container>
</template>
<script setup>
import { onBeforeMount, ref, getCurrentInstance } from 'vue';
import avatar from "../../../assets/img/avator.png"

const { proxy } = getCurrentInstance();
let isCollapse = ref(false);
onBeforeMount(() => {
    activePath.value = sessionStorage.getItem(activePath)
        ? sessionStorage.getItem("activePath") : "/index"
})
let activePath = ref("");

const saveActiveNav = (path) => {
    sessionStorage.setItem("activePath", path);
    activePath.value = path;
}
const logout = () => {
    sessionStorage.clear();
    proxy.$commonJs.changeView('/adminLogin')
}
</script>
<style scoped>

.dsadsadsa{
    height: 94%;
}


</style>