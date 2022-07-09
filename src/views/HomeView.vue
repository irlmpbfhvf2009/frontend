<template>

  <div class="bg" :style="{ backgroundImage: `url(${data.backgroundImage})` }">
    <!-- <div><img src="../assets/123/logo-navbar20210525.png"></div> -->
    <!--     <div class="a">
      <a class="loginBtn" :style="{ marginRight: '10px' }" href="#">登入</a>
      <a class="registerBtn" href="#">註冊</a>
    </div> -->
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
import { reactive } from "vue";

export default ({
  setup() {
    const data = reactive({
      backgroundImage: bg,
    })

    return {
      data
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


.loginBtn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 8px 20px;
  border: 1px solid #545454;
  border-radius: 8px;
  background: #bdbbbe;
  background: -moz-linear-gradient(top, #bdbbbe, #bdbbbe);
  background: linear-gradient(to bottom, #d1d1d1, #545454);
  -webkit-box-shadow: #bebebe 0px 0px 40px 0px;
  -moz-box-shadow: #bdbbbe 0px 0px 40px 0px;
  box-shadow: #bebebe 0px 0px 40px 0px;
  text-shadow: #bdbbbe 1px 1px 1px;
  font: normal normal bold 20px arial;
  color: #ffffff;
  text-decoration: none;
}

.loginBtn:hover,
.loginBtn:focus {
  border: 1px solid #636363;
  background: #bdbbbe;
  background: -moz-linear-gradient(top, #fbfbfb, #656565);
  background: linear-gradient(to bottom, #fbfbfb, #656565);
  color: #ffffff;
  text-decoration: none;
}

.loginBtn:active {
  background: #7d7d7d;
  background: -webkit-gradient(linear, left top, left bottom, from(#7d7d7d), to(#545454));
  background: -moz-linear-gradient(top, #7d7d7d, #545454);
  background: linear-gradient(to bottom, #7d7d7d, #545454);
}

.registerBtn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 8px 20px;
  border: 1px solid #545454;
  border-radius: 8px;
  background: #ff85ff;
  background: -webkit-gradient(linear, left top, left bottom, from(#ff85ff), to(#545454));
  background: -moz-linear-gradient(top, #ff85ff, #545454);
  background: linear-gradient(to bottom, #ff85ff, #545454);
  -webkit-box-shadow: #bebebe 0px 0px 40px 0px;
  -moz-box-shadow: #bebebe 0px 0px 40px 0px;
  box-shadow: #bebebe 0px 0px 40px 0px;
  text-shadow: #323232 1px 1px 1px;
  font: normal normal bold 20px arial;
  color: #ffffff;
  text-decoration: none;
}

.registerBtn:hover,
.registerBtn:focus {
  border: 1px solid #636363;
  background: #ffa0ff;
  background: -webkit-gradient(linear, left top, left bottom, from(#ffa0ff), to(#656565));
  background: -moz-linear-gradient(top, #ffa0ff, #656565);
  background: linear-gradient(to bottom, #ffa0ff, #656565);
  color: #ffffff;
  text-decoration: none;
}

.registerBtn:active {
  background: #995099;
  background: -webkit-gradient(linear, left top, left bottom, from(#995099), to(#545454));
  background: -moz-linear-gradient(top, #995099, #545454);
  background: linear-gradient(to bottom, #995099, #545454);
}
</style>