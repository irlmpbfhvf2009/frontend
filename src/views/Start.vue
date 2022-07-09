<template>

  <div class="bg" :style="{ backgroundImage: `url(${bgimg.backgroundImage})` }">
    <!-- <div><img src="../assets/123/logo-navbar20210525.png"></div> -->
    <!--     <div class="a">
      <a class="loginBtn" :style="{ marginRight: '10px' }" href="#">登入</a>
      <a class="registerBtn" href="#">註冊</a>
    </div> -->
    <div class="a">
      <router-link to="/login">
        <button style="margin-right: 10px;" type="button" class="btn btn-secondary">登入</button>
      </router-link>
      <router-link to="/register">
        <button type="button" class="btn btn-success">註冊</button>
      </router-link>
    </div>
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

    <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
      <template #cover>
        <img class="img" style="width: 240px;height: 240px;" src="../assets/123/202111280011033885.jpg" />
      </template>
      <a-card-meta title="新北 虎牙 24">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>

    <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
      <template #cover>
        <img class="img" style="width: 240px;height: 240px;" src="../assets/123/202204221946132629.jpg" />
      </template>
      <a-card-meta title="台中 微微 21">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 240px;display:inline-block;margin: 30px;">
      <template #cover>
        <img class="img" style="width: 240px;height: 240px;" src="../assets/123/202111112244486815.jpg" />
      </template>
      <a-card-meta title="台北 路比 23">
        <template #description>註冊並了解更多</template>
      </a-card-meta>
    </a-card>
  </div>

</template>

<script>
import bg from '@/assets/2.jpg'
import { ref, reactive, computed, onMounted } from 'vue'
export default ({
  setup() {
    const bgimg = reactive({
      backgroundImage: bg,
    })

    return {
      bgimg
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
  filter: blur(4px)
}

.a {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>