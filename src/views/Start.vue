<template>
  <div class="bg" :style="{ backgroundImage: `url(${data.backgroundImage})` }">
    <Login />
  </div>
  <div style="width: 1000px;margin:0px auto;margin-top: 100px;">
    <h1 style="text-align:center">推薦用戶</h1>

    <router-link to="/register">
      <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
        <template #cover>
          <img class="img" style="width: 240px;height: 240px;" src="../assets/123/002.jpg" />
        </template>
        <a-card-meta title="台北 潔心 22">
          <template #description>註冊並了解更多</template>
        </a-card-meta>
      </a-card>
    </router-link>

    <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
      <template #cover>
        <img class="img" style="width: 240px;height: 240px;" src="../assets/123/202111112232109073.jpg" />
      </template>
      <a-card-meta title="台北 尼啦 24">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>

    <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
      <template #cover>
        <img class="img" style="width: 240px;height: 240px;" src="../assets/123/202111112249113769.jpg" />
      </template>
      <a-card-meta title="台北 Mui 28">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import bg from '@/assets/2.jpg'
import { ref, reactive, computed, onMounted } from 'vue'
import Login from "@/components/Login.vue"
export default ({
  components: { 
    Login,
    },
  setup() {
    const data = reactive({
      backgroundImage: bg,
    })

    return {
      data,
    }
  }
})
</script>
<style>
.bg {
  width: 100%;
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.img {
  filter: blur(5px)
}

</style>