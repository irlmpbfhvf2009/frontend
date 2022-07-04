<template>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, paddingTop: '60px' }">
        <a-menu mode="inline" style="height: 100%">
            <a-divider />
            <a-sub-menu>
                <template #title>
                    <span>
                        我的好友
                    </span>
                </template>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: "TheSider",
    setup() {
    }
}

</script>

<style scoped>
.sider {
    height: 15px;
    background: rgba(255, 255, 255, 0.2);
    margin: 5px;
    text-align: center;
    font-size: 15px;
}

.sider-title {
    text-align: center !important;
}
</style>