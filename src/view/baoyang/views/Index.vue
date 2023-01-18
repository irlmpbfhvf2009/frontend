<template>
    <div class="bg" :style="{ backgroundImage: `url(${data.backgroundImage})` }">
        <Login />
    </div>
    <div class="w1000m0amt100">
    <h1 class="tac">推薦用戶</h1>

    <a href="/">
      <a-card hoverable class="w240dibm30">
        <template #cover>
          <img class="img" src="../../../assets/img/baoyang/001.jpg" />
        </template>
        <a-card-meta title="台北 潔心 22">
          <template #description>註冊並了解更多</template>
        </a-card-meta>
      </a-card>
    </a>

    <a-card hoverable class="w240dibm30">
      <template #cover>
        <img class="img"  src="../../../assets/img/baoyang/002.jpg" />
      </template>
      <a-card-meta title="台北 尼啦 24">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>

    <a-card hoverable class="w240dibm30">
      <template #cover>
        <img class="img" src="../../../assets/img/baoyang/003.jpg" />
      </template>
      <a-card-meta title="台北 Mui 28">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script setup>
import Login from "../components/Login.vue"
import { reactive } from "vue";
import bg from "../../../assets/img/baoyang/bg.jpg"
import "../../../assets/css/baoyang/index.css";
const data = reactive({
    backgroundImage: bg,
})
</script>
